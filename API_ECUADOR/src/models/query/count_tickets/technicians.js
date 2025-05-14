/*CASOS MENSAULES POR CADA TECNICO*/

import { Op, Sequelize, where } from "sequelize";
import { Where } from "sequelize/lib/utils";

export async function tickets_technicians(models) {
  //arreglo de tecnicos
  const technicians = [];

  try {
    //fecha(tomamos mes y año)
    const fecha = new Date();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();

    //busca las tecnicos
    const usuarios = await models.glpi_profiles_users.findAll({
      attributes: ["id", "users_id"],
      where: {
        profiles_id: 6,
        [Op.not]: {
          users_id: [4, 8],
        },
      },
    });


    for (let i = 0; i < usuarios.length; i++) {
      //busca el usuario
      const usuario = await models.glpi_users.findOne({
        attributes: ["id", "realname", "firstname"],
        where: { id: usuarios[i].users_id },
      });

      const casosMes = await models.glpi_tickets_users.count({
        include: [
          {
            model: models.glpi_tickets,
            as: "ticket",
            required: true,
            where: {
              [Op.and]: [
                Sequelize.where(
                  Sequelize.fn("MONTH", Sequelize.col("ticket.date")),
                  mes
                ),
                Sequelize.where(
                  Sequelize.fn("YEAR", Sequelize.col("ticket.date")),
                  año
                ),
              ],
            },
          },
        ],
        where: { users_id: usuarios[i].users_id },
      });

      //agrega datos al arreglo
      technicians.push({
        nombre: `${usuario.firstname} ${usuario.realname}`,
        cantidad: casosMes,
      });

      technicians.sort(function (a, b) {
        if (a.cantidad < b.cantidad) {
          return 1;
        }
        if (a.cantidad > b.cantidad) {
          return -1;
        }
        return 0;
      });

      while (technicians.length > 5) {
        technicians.pop();
      }
    }

    return technicians;
  } catch (error) {
    return error;
  }
}
