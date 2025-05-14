import { DataTypes } from "sequelize";
import { sequelize_Ecuador } from "../database/connection.js";

const glpi_locations = sequelize_Ecuador.define(
  "glpi_locations",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    entities_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    is_recursive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    locations_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    completename: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "glpi_locations",
    timestamps: false,
  }
);

export default glpi_locations;
