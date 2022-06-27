import { authorize } from "src/middleware/auth";
import { document } from "src/utils/dynamodbClient";

export const handle = async (event) => {
  const isAuthorized = await authorize(event)

  if (!isAuthorized) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized" }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  const users = await document.scan({ TableName: "users" }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(users.Items),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
