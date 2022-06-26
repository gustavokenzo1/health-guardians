import { document } from "src/utils/dynamodbClient";

export const handle = async (event) => {
  const { id } = JSON.parse(event.body);

  document
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
