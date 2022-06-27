export const authorize = async (event) => {
  try {
    const apiKey = await event.queryStringParameters["API_KEY"];
    if (apiKey !== process.env.API_KEY) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};
