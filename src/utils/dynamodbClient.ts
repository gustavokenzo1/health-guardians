import { DynamoDB } from "aws-sdk";

const options = {
  region: "localhost",
  endpoint: "http://localhost:8000",
};

const isOffline = () => {
  return process.env.IS_OFFLINE === "true";
};

export const document = isOffline()
  ? new DynamoDB.DocumentClient(options)
  : new DynamoDB.DocumentClient({
    region: "sa-east-1",
  });
