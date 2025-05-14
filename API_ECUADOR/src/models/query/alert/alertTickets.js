import { where, fn, col, Sequelize, Op } from "sequelize";

export async function AlertTickets(glpi_tickets, glpi_tickets_users, priorities) {
  try {
    var contador = 0;

    //fecha(tomamos mes y año)
    const fecha = new Date();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();

    //consultar total de tickets por fecha
    const total_ticket = await glpi_tickets.findAll({
      where: {
        status: { [Op.or]: [1, 2] },
        entities_id: { [Op.or]: [1, 2] },
        locations_id: { [Op.not]: 0 },
        is_deleted: false,
        [Op.and]: [
          Sequelize.where(Sequelize.fn("MONTH", Sequelize.col("date")), mes),
          Sequelize.where(Sequelize.fn("YEAR", Sequelize.col("date")), año),
        ],
      },
    });

    for (let i = 0; i < total_ticket.length; i++) {
      let fecha_alerta =
        Date.parse(total_ticket[i].date) -
        18000000 +
        priorities[total_ticket[i].urgency].maxTime;
      let fecha_salida =
        Date.parse(total_ticket[i].date) -
        18000000 +
        priorities[total_ticket[i].urgency].totalTime;

      let alertaFechaCerca = Date.parse(fecha) > fecha_alerta ? true : false;
      let alertaFechaSalida = Date.parse(fecha) > fecha_salida ? true : false;

      let usuario = await glpi_tickets_users.findAll({
        where: { tickets_id: total_ticket[i].users_id_recipient, type: 2 },
      });

      if (alertaFechaCerca === true || alertaFechaSalida === true || usuario.length <= 0) {
        contador++;
        console.log("Alerta de advertencia");
      }
    }
    return contador;
  } catch (error) {
    return error;
  }
}
