//CONSULTA DE TIPO 'SELECT *FROM'

// import glpi_profiles from '../../glpi_profiles.js';

// export const query_glpi_profiles = glpi_profiles.findAll({attributes:['id','name','interface','is_default','helpdesk_hardware','helpdesk_item_type','ticket_status','date_mod','comment','problem_status','create_ticket_on_login','tickettemplates_id',    'changetemplates_id','problemtemplates_id','change_status','managed_domainrecordtypes','date_creation']})
//     .then(glpi_profiles =>{
//         console.log("------------" + "\n| PERFILES |" + "\n------------");
//         const json_glpi_profiles = JSON.stringify(glpi_profiles)//va el nombre dela tabla
//         console.log(json_glpi_profiles)
//     })
//     .catch(error=>{
//         console.log("------------" + "\n| PERFILES |" + "\n------------");
//         console.log(error);
//     })