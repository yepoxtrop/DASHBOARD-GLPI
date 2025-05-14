import glpi_users from "../../glpi_users.js";
import glpi_tickets_users from "../../glpi_tickets_users.js";
import { where } from "sequelize";

export async function tecnicos(las_soluciones) {
  let data = null;
  try {
    const idUsuario = await glpi_tickets_users.findAll({
      attributes: ["id", "tickets_id", "users_id"],
      where: { tickets_id: las_soluciones, type: 2 },
      order: [
        ["id", "DESC"],
        ["users_id", "DESC"],
      ],
      limit: 1,
    });

    if (idUsuario.length > 0) {
      const nombreTech = await glpi_users.findAll({
        attributes: ["id", "realname", "firstname"],
        where: { id: idUsuario[0].users_id },
      });

      data = nombreTech.map(
        (datos_tecnico) =>
          `${datos_tecnico.firstname} ${datos_tecnico.realname}`
      );
    } else {
      data = null;
    }

    return data;
  } catch (error) {
    return error;
  }
}
