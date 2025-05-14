import { DataTypes } from "sequelize";
import { sequelize_Ecuador } from "../database/connection.js";

const glpi_users = sequelize_Ecuador.define(
  "glpi_users",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    realname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    locations_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    profiles_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    user_dn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    personal_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    personal_token_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    api_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    api_token_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cookie_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cookie_token_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    date_creation: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    users_id_supervisor: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "glpi_users",
    timestamps: false,
  }
);

export default glpi_users;
