//CONSULTA DE TIPO 'SELECT *FROM'

// import glpi_profiles_users from '../../glpi_profiles_users.js';

// export const query_glpi_profiles_users = glpi_profiles_users.findAll({attributes:['id','users_id','profiles_id','entities_id','is_recursive','is_dynamic']})
//     .then(glpi_profiles_users =>{
//         console.log("------------------------" + "\n| PERFILES DE USUARIOS |" + "\n------------------------");
//         const json_glpi_profiles_users = JSON.stringify(glpi_profiles_users)//va el nombre dela tabla
//         console.log(json_glpi_profiles_users)
//     })
//     .catch(error =>{
//         console.log("------------------------" + "\n| PERFILES DE USUARIOS |" + "\n------------------------");
//         console.log(error)
//     })