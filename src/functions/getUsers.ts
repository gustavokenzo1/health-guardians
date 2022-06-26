import { document } from "src/utils/dynamodbClient";

export const handle = async () => {
  const users = await document.scan({ TableName: "users" }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(users.Items),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
