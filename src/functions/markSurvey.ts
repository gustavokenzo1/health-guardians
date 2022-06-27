import { authorize } from "src/middleware/auth";
import { malandragem } from "src/utils/malandragem";

export const handle = async (event) => {
  const isAuthorized = await authorize(event)

  if (!isAuthorized) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized" }),
    };
  }
  await malandragem();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Malandragem concluída com sucesso!" }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
