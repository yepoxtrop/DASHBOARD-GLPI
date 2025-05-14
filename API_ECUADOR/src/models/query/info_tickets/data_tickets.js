import { Op, where } from "sequelize";
import { htmlToText, convert } from "html-to-text";
import { usuarios } from "./data_users.js";
import { tecnicos } from "./data_tech.js";

export async function data_tickets(models, priorities) {
  try {
    const localizaciones = await models.glpi_locations.findAll({
      attributes: ["id", "name"],
    });

    const new_query = await Promise.all(
      localizaciones.map(async (datosArray) => {
        const casos = await models.glpi_tickets.findAll({
          where: {
            locations_id: datosArray.id,
            status: { [Op.or]: [1, 2] },
            entities_id: { [Op.or]: [1, 2] },
            is_deleted: false,
          },
        });

        let fechaAcutal = new Date();

        const usuariosPromises = casos.map((caso) =>
          usuarios(caso.users_id_recipient)
        );
        const users = await Promise.all(usuariosPromises);

        const tecnicosPromises = casos.map((caso) => tecnicos(caso.id));
        let tecnico = await Promise.all(tecnicosPromises);

        return {
          id: datosArray.id,
          nombre: datosArray.name.toLowerCase(),
          casos: casos.map((caso, index) => ({
            id_caso: caso.id,
            date_caso: caso.date_creation,
            priority_caso: priorities[caso.urgency].type,
            time_caso: priorities[caso.urgency].time,
            time_alert:(Date.parse(caso.date)-18000000) + priorities[caso.urgency].maxTime,
            time_timeout:(Date.parse(caso.date)-18000000) + priorities[caso.urgency].totalTime,
            time_today: Date.parse(fechaAcutal),
            time_window_alert: (Date.parse(fechaAcutal)>(Date.parse(caso.date)-18000000) + priorities[caso.urgency].maxTime ? true : false),
            time_window_timeout: (Date.parse(fechaAcutal)>(Date.parse(caso.date)-18000000) + priorities[caso.urgency].totalTime ? true : false),
            user_caso: users[index],
            technician_caso: tecnico[index],
            content_caso: convert(
              htmlToText(caso.content, { wordwrap: 13000 })
            ),
            status_caso: tecnico[index] == null ? false : true,
          })),
        };
      })
    );

    return new_query;
  } catch (error) {
    console.log(error);
  }
}
