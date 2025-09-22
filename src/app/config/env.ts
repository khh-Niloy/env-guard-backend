import dotenv from "dotenv";
dotenv.config();


interface IEnvVars {
  PORT: string;
  MONGO_URI: string;
  NODE_ENV: "development" | "production";
  DOC_URL: string;
}

const loadEnvVars = (): IEnvVars => {
  const requiredEnvVar: string[] = [
    "PORT",
    "MONGO_URI",
    "NODE_ENV",
    "DOC_URL",
  ];
  requiredEnvVar.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`env not found error -> ${key}`);
    }
  });
  return {
  PORT: process.env.PORT as string,
  MONGO_URI: process.env.MONGO_URI as string,
  NODE_ENV: process.env.NODE_ENV as "development" | "production",
  DOC_URL: process.env.DOC_URL as string,
  };
};

export const envVars = loadEnvVars();
