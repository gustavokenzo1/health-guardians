import CryptoJS from 'crypto-js';
import api from "src/services/api";

export const loginUser = async (email: string, password: string) => {
  const decryptedPassword = CryptoJS.AES.decrypt(
    password,
    process.env.SECRET_KEY
  ).toString(CryptoJS.enc.Utf8);

  const data = {
    user: {
      email,
      password: decryptedPassword,
    },
  };

  try {
    const response = await api.post("/user/login", data);

    return response
  } catch (error) {
    console.log(error);
  }
};
