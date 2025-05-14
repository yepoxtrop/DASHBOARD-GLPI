/*CASOS MENSUALES POR CADA ZONA REGIONAL*/
import { where, Op, fn, col, Sequelize } from "sequelize";

export async function localizacionesTotales(models) {
  //arreglo para guardar los resultados de la consulta
  var localizaciones_array_total = [];

  try {
    //fecha(tomamos mes y año)
    const fecha = new Date();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();

    //busca las localizaciones
    const localizaciones = await models.glpi_locations.findAll({
      attributes: ["id", "name"],
    });

    
    //buscar casos localizacion
    for (let i = 0; i < localizaciones.length; i++) {
      const tickets = await models.glpi_tickets.findAll({
        where: {
          locations_id: localizaciones[i].id,
          [Op.and]: [
            Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('date')), mes),
            Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('date')), año)
          ],
        },
      });

      const ticketsTotal = await models.glpi_tickets.findAll({where: {
        locations_id: localizaciones[i].id
      },});

      const cantidad_tickets = tickets.length;
      const cantidad_total_tickets = ticketsTotal.length;
      
      //agregar resultados
      localizaciones_array_total.push({
        nombre: localizaciones[i].name,
        cantidad_mensual: cantidad_tickets,
        cantidad_total: cantidad_total_tickets
      });

      localizaciones_array_total.sort(function (a,b) {
        if (a.cantidad_mensual < b.cantidad_mensual) {
          return 1;
        }
        if (a.cantidad_mensual > b.cantidad_mensual) {
          return -1;
        }
        return 0;
      })
      
    }

    return localizaciones_array_total;
  } catch (error) {
    return error
  }
}
