//CONSULTA DE TIPO 'SELECT *FROM'

// import glpi_users from "../../glpi_users.js";

// export const query_glpi_users = glpi_users.findAll({attributes:['id','name','password','phone','realname','firstname','locations_id','user_dn',
//     'user_dn_hash','personal_token','personal_token_date','api_token','api_token_date','cookie_token','cookie_token_date','date_creation',
//     'users_id_supervisor']})
//     .then(glpi_users=>{
//         console.log("------------" + "\n| USUARIOS |" + "\n------------");
//         const json_glpi_users = JSON.stringify(glpi_users)//va el nombre dela tabla
//         console.log(json_glpi_users)
//     })
//     .catch(error =>{
//         console.log("------------" + "\n| USUARIOS |" + "\n------------");
//         console.log('ERROR:'+error)
//     })