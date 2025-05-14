import { sequelize_Ecuador } from "../database/connection.js";
import { DataTypes, DATE, INTEGER, STRING } from "sequelize";

const glpi_useremails = sequelize_Ecuador.define(
  "glpi_useremails",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    users_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    is_default: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    is_dynamic: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    email: { type: DataTypes.STRING, allowNull: true },
  },
  {
    tableName: "glpi_useremails",
    timestamps: false,
  }
);

export default glpi_useremails;
