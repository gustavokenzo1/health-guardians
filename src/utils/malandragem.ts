import { sendErrorEmail, sendQuizAnswersEmail, sendQuizAnswersErrorEmail, sendSuccessEmail } from "src/adapters/node-mailer-adapter";
import api from "src/services/api";
import { document } from "./dynamodbClient";
import { loginUser } from "./loginUser";
import { getQuizAnswers } from "./getQuizAnswers";

const TAGUATINGA_NORTE_COORDS = {
  latitude: -15.794298,
  longitude: -48.056408
};

const GAMA_LESTE_COORDS = {
  latitude: -16.032905,
  longitude: -48.053711,
};

export const malandragem = async () => {
  const users = await document.scan({ TableName: "users" }).promise();

  await Promise.all(
    users.Items.map(async (user) => {
      const randomLatitude =
        Math.random() *
        (GAMA_LESTE_COORDS.latitude - TAGUATINGA_NORTE_COORDS.latitude) +
        TAGUATINGA_NORTE_COORDS.latitude;

      const randomLongitude =
        Math.random() *
        (GAMA_LESTE_COORDS.longitude - TAGUATINGA_NORTE_COORDS.longitude) +
        TAGUATINGA_NORTE_COORDS.longitude;

      const created_at = new Date().toISOString();

      const survey = {
        household_id: null,
        latitude: randomLatitude,
        longitude: randomLongitude,
        symptom: [],
        created_at
      }

      const newLogin = await loginUser(user.email, user.password);
      const JWT = newLogin.headers.authorization.split(" ")[1];

      const response = await api.post(
        `/users/${user.id}/surveys`,
        {
          survey
        },
        {
          headers: {
            Authorization: `Bearer ${JWT}`
          }
        }
      );

      if (response.status != 201) {
        if (response.data.errors != "The user already contributed with this survey today")
          await sendErrorEmail(user.email, response.data.errors);
      } else {
        if (new Date(created_at).getDay() === 1) {
          await sendSuccessEmail(user.email);
        } else if (new Date(created_at).getDay() === 2) {
          try {
            const answers = await getQuizAnswers(JWT, user.id);
            await sendQuizAnswersEmail(user.email, answers);
          } catch (error) {
            await sendQuizAnswersErrorEmail(user.email, error);
          }
        }
      }
    })
  )
};
