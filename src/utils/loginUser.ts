import api from "src/services/api";

export const loginUser = async (email: string, password: string) => {
  const data = {
    user: {
      email,
      password,
    },
  };
  const response = await api.post("/user/login", data);

  return response
};
