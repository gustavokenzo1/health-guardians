import { malandragem } from "src/utils/malandragem";

export const handle = async () => {
  await malandragem();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Malandragem concluída com sucesso!" }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
