//CONSULTA DE TIPO 'SELECT *FROM'

// import glpi_tickets from "../../glpi_tickets.js";

// export const query_glpi_tickets = glpi_tickets.findAll({attributes:['id','entities_id','name','date','closedate','solvedate','takeintoaccountdate','date_mod','users_id_lastupdater','status','users_id_recipient','requesttypes_id','content','urgency','impact',    'priority','itilcategories_id','type','global_validation','locations_id','validation_percent']})
//     .then(glpi_tickets =>{
//         const json_glpi_tickets = JSON.stringify(glpi_tickets)//va el nombre dela tabla
//         return json_glpi_tickets
//     })
//     .catch(error =>{
//         console.log(error)
//     })