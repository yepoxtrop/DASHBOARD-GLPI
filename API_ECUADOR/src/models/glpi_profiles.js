import { DataTypes } from "sequelize";
import { sequelize_Ecuador } from "../database/connection.js";

const glpi_profiles = sequelize_Ecuador.define('glpi_profiles',{
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    interface:{
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue:'helpdesk'
    },
    is_default:{
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue:0
    },
    helpdesk_hardware:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    },
    helpdesk_item_type:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    ticket_status:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    date_mod:{
        type:DataTypes.DATE,
        allowNull:true,
    },
    comment:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    problem_status:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    create_ticket_on_login:{
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue:0
    },
    tickettemplates_id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        defaultValue:0
    },
    changetemplates_id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        defaultValue:0
    },
    problemtemplates_id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        defaultValue:0
    },
    change_status:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    managed_domainrecordtypes:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    date_creation:{
        type:DataTypes.DATE,
        allowNull:true,
    },
},{
    tableName:'glpi_profiles',
    timestamps:false
},);

export default glpi_profiles;