import { DataTypes, DATE, INTEGER, STRING } from "sequelize";
import { sequelize_Ecuador } from "../database/connection.js";
import glpi_tickets_users from "./glpi_tickets_users.js";

const glpi_tickets = sequelize_Ecuador.define(
  "glpi_tickets",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    entities_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    closedate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    solvedate: {
      type: DataTypes.DATE,
      allowNull: true,
    }/*,
    date_mod: {
      type: DataTypes.DATE,
      allowNull: true,
    }*/,
    users_id_lastupdater: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    users_id_recipient: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    requesttypes_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    urgency: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    impact: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    itilcategories_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    global_validation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    locations_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    validation_percent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    date_creation: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "glpi_tickets",
    timestamps: false,
  }
);

glpi_tickets.associate = (models) => {
  glpi_tickets.hasMany(models.glpi_tickets_users, {
    foreignKey: "tickets_id",
    as: "ticket_users",
  });
};


export default glpi_tickets;
