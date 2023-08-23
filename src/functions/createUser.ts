import { document } from "../utils/dynamodbClient";
import { v4 as uuidv4 } from "uuid";
import { loginUser } from "src/utils/loginUser";
import { authorize } from "src/middleware/auth";
import CryptoJS from 'crypto-js';

interface ICreateUser {
  email: string;
  password: string;
}

export const handle = async (event) => {
  const isAuthorized = await authorize(event);

  if (!isAuthorized) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized" }),
    };
  }

  const { email, password } = JSON.parse(event.body) as ICreateUser;

  const users = await document.scan({ TableName: "users" }).promise();

  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    process.env.SECRET_KEY
  ).toString();

  const userExists = users.Items.find((user) => user.email === email);

  if (!userExists) {
    const uuid = uuidv4();
    const gds_user = await loginUser(email, encryptedPassword);

    const user_id = gds_user.data.user.id;

    await document
      .put({
        TableName: "users",
        Item: {
          id: uuid,
          user_id,
          email,
          password: encryptedPassword,
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
        "Access-Control-Allow-Origin": "*",
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
        "Access-Control-Allow-Origin": "*",
      },
    };
  }
};
