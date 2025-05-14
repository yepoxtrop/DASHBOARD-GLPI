import { sequelize_Ecuador } from "./connection.js";

export const conexion = sequelize_Ecuador.authenticate()
    .then(()=>{
        console.log("CONEXION EXITOSA, VAMOS BIEN");
    })
    .catch(error=>{
        console.log("HUBO UN ERROR Y ESE ES:"+error)
    })