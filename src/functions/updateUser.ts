import { authorize } from "src/middleware/auth";
import { document } from "src/utils/dynamodbClient";
import { loginUser } from "src/utils/loginUser";

export const handle = async (
  user_id: string,
  email: string,
  password: string,
  event
) => {
  const isAuthorized = await authorize(event);

  if (!isAuthorized) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized" }),
    };
  }
  const userExists = await document
    .get({
      TableName: "users",
      Key: {
        id: user_id,
      },
    })
    .promise();

  if (userExists.Item) {
    const gds_user = await loginUser(email, password);
    const JWT = gds_user.headers.authorization.split(" ")[1];

    await document
      .update({
        TableName: "users",
        Key: {
          id: user_id,
        },
        UpdateExpression: "set #JWT = :JWT",
        ExpressionAttributeNames: {
          "#JWT": "JWT",
        },
        ExpressionAttributeValues: {
          ":JWT": JWT,
        },
        ReturnValues: "UPDATED_NEW",
      })
      .promise();
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Usuário atualizado com sucesso" }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
