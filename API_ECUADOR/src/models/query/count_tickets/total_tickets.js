/*TOTAL DE TICKETS POR MES*/
import { where, fn, col, Sequelize, Op } from "sequelize";
import { Col } from "sequelize/lib/utils";

export async function total_tickets(models) {
  try {
    //fecha(tomamos mes y año)
    const fecha = new Date();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();

    //consultar total de tickets por fecha
    const total_ticket = await models.findAll({
      atrtibutes: [[fn("COUNT", col())]],
      where: {locations_id:{[Op.not]:0},
        [Op.and]: [
          Sequelize.where(Sequelize.fn("MONTH", Sequelize.col("date")), mes),
          Sequelize.where(Sequelize.fn("YEAR", Sequelize.col("date")), año),
        ],
      },
    });
    
    const number_total = total_ticket.length;

    return number_total;
  } catch (error) {
    return error
  }
}
