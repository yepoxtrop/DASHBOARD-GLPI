import { config } from "dotenv";

config();

//Puerto de bd glpi
export const PORT = process.env.PORT;

//Info bd glpi
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_USER_NAME = process.env.DATABASE_USER_NAME;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_PORT = process.env.DATABASE_PORT;

