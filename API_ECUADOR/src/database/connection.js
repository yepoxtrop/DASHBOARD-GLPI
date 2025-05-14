import { Sequelize } from "sequelize";

import {
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_USER_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT
} from "../config.js";

export const sequelize_Ecuador = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER_NAME,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: "mariadb",
    dialectOptions: {
      allowPublicKeyRetrieval: true,
      connectTimeout: 20000,//
    },
    logging: false,
  }
);
