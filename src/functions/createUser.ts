import { document } from "../utils/dynamodbClient";
import { v4 as uuidv4 } from "uuid";
import { loginUser } from "src/utils/loginUser";

interface ICreateUser {
  email: string;
  password: string;
}

export const handle = async (event) => {
  const { email, password } = JSON.parse(event.body) as ICreateUser;
  const users = await document.scan({ TableName: "users" }).promise();

  const userExists = users.Items.find((user) => user.email === email);

  if (!userExists) {
    const uuid = uuidv4();
    const gds_user = await loginUser(email, password);

    const user_id = gds_user.data.user.id;
    const JWT = gds_user.headers.authorization.split(" ")[1];

    await document
      .put({
        TableName: "users",
        Item: {
          id: uuid,
          user_id,
          JWT,
        },
      })
      .promise();

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Usuário criado com sucesso",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Usuário já existe",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
