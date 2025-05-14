//CONSULTA DE TIPO 'SELECT *FROM'

// import glpi_tickets_users from "../../glpi_tickets_users.js";

// export const query_glpi_tickets_users = glpi_tickets_users.findAll({attributes:['id','tickets_id','users_id','type','use_notification', 'alternative_email']})
//     .then(glpi_tickets_users =>{
//         console.log("-----------------------" + "\n| TICKETS DE USUARIOS |" + "\n-----------------------");
//         const json_glpi_tickets_users = JSON.stringify(glpi_tickets_users)//va el nombre dela tabla
//         console.log(json_glpi_tickets_users)
//     })
//     .catch(error =>{
//         console.log("-----------------------" + "\n| TICKETS DE USUARIOS |" + "\n-----------------------");
//         console.log('Error, es:'+error)
//     })