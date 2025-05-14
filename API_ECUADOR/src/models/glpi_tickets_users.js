import { DataTypes, INTEGER, STRING, TINYINT } from "sequelize";
import { sequelize_Ecuador } from "../database/connection.js";

const glpi_tickets_users = sequelize_Ecuador.define(
  "glpi_tickets_users",
  {
    //campos de las tablas
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tickets_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    users_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    use_notification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
    },
    alternative_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "glpi_tickets_users",
    timestamps: false,
  }
);


glpi_tickets_users.associate = (models) => {
  glpi_tickets_users.belongsTo(models.glpi_tickets, {
    foreignKey: "tickets_id",
    as: "ticket", // puedes poner el alias que prefieras
  });
};


export default glpi_tickets_users;
