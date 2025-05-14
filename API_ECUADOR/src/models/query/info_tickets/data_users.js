import glpi_users from "../../glpi_users.js";
import glpi_useremails from "../../glpi_useremails.js";

export async function usuarios(la_cura) {
  try {
    const usuario = await glpi_users.findAll({
      attributes: ["id","name","realname", "firstname"],
      where: { id: la_cura },
    });

    const correo = await glpi_useremails.findAll({
      attributes: ["email"],
      where: { users_id: la_cura },
    });

    const usuariosNombre = usuario.map(
      (user) => `${user.firstname} ${user.realname}`
    );

    const usuariosEmail = correo.map(
        (corre) => `${corre.email}`
    );

    const usuariosUsername = usuario.map(
      (userName) => `${userName.name}`
    );

    if (usuariosNombre == " " && usuariosEmail.length  > 0) {
      //console.log("tiene correo");  
      return usuariosEmail;
    }
    
    if (usuariosNombre == " " && usuariosEmail.length == 0) {
      //console.log("tiene username");
      return usuariosUsername;
    }

    return usuariosNombre;
  } catch (error) {
    return error;
  }
}
