import { sendErrorEmail, sendSuccessEmail } from "src/adapters/node-mailer-adapter";
import api from "src/services/api";
import { document } from "./dynamodbClient";
import { loginUser } from "./loginUser";

const AGUAS_LINDAS_COORDS = {
  latitude: -15.713631,
  longitude: -47.8984,
};

const LUZIANIA_COORDS = {
  latitude: -16.232539,
  longitude: -47.929961,
};

export const malandragem = async () => {
  const users = await document.scan({ TableName: "users" }).promise();

  await Promise.all(
    users.Items.map(async (user) => {
      const randomLatitude =
        Math.random() *
        (LUZIANIA_COORDS.latitude - AGUAS_LINDAS_COORDS.latitude) +
        AGUAS_LINDAS_COORDS.latitude;

      const randomLongitude =
        Math.random() *
        (LUZIANIA_COORDS.longitude - AGUAS_LINDAS_COORDS.longitude) +
        AGUAS_LINDAS_COORDS.longitude;

      const survey = {
        household_id: null,
        latitude: randomLatitude,
        longitude: randomLongitude,
        symptom: [],
        created_at: new Date().toISOString(),
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
        await sendErrorEmail(user.email, response.data.errors);
      } else {
        await sendSuccessEmail(user.email);
      }
    })
  )
};
