//CONSULTA DE TIPO 'SELECT *FROM'

// import glpi_locations from "../../glpi_locations.js";

// export const query_glpi_locations = glpi_locations.findAll({attributes:['id','entities_id','is_recursive','name','locations_id', 'completename', 'comment', 'country']})
//     .then(glpi_locations =>{
//         console.log("------------------" + "\n| LOCALIZACIONES |" + "\n------------------");
//         const json_glpi_locations = JSON.stringify(glpi_locations)//va el nombre dela tabla
//         console.log(json_glpi_locations)
//     })
//     .catch(error =>{
//         console.log("------------------" + "\n| LOCALIZACIONES |" + "\n------------------");
//         console.log('Error, es:'+error)
//     })