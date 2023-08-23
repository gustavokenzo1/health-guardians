import { authorize } from "src/middleware/auth";
import { document } from "src/utils/dynamodbClient";

export const handle = async (event) => {
  const isAuthorized = await authorize(event);

  if (!isAuthorized) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized" }),
    };
  }
  const { id } = JSON.parse(event.body);

  await document
    .delete({
      TableName: "users",
      Key: {
        id,
      },
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Usuário deletado com sucesso",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
