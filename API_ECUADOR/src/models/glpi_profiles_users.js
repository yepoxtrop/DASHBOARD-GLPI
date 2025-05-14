import { DataTypes } from "sequelize";
import { sequelize_Ecuador } from "../database/connection.js";

const glpi_profiles_users = sequelize_Ecuador.define('glpi_profiles_users', {
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
    },
    users_id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        defaultValue:0
    },
    profiles_id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        defaultValue:0
    },
    entities_id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        defaultValue:0
    },
    is_recursive:{
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue:1
    },
    is_dynamic:{
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue:0
    },
    is_default_profile:{
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue:0
    },
},{
    tableName:'glpi_profiles_users',
    timestamps:false
})

export default glpi_profiles_users;