import api from "src/services/api";
import { document } from "./dynamodbClient";

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
  users.Items.forEach(async (user) => {
    const randomLatitude =
      Math.random() *
        (LUZIANIA_COORDS.latitude - AGUAS_LINDAS_COORDS.latitude) +
      AGUAS_LINDAS_COORDS.latitude;

    const randomLongitude =
      Math.random() *
        (LUZIANIA_COORDS.longitude - AGUAS_LINDAS_COORDS.longitude) +
      AGUAS_LINDAS_COORDS.longitude;

    const response = await api.post(
      `/users/${user.id}/surveys`,
      {
        survey: {
          household_id: null,
          latitude: randomLatitude,
          longitude: randomLongitude,
          symptom: [],
          created_at: new Date().toISOString(),
        },
      },
      { headers: { Authorization: `Bearer ${user.JWT}` } }
    );

    if (response.status === 208) {
      console.log(`${user.id} já respondeu`);
    } else {
      if (response.data.user.id === null) {
        // Revalidar o JWT
      }
    }
  });
};
