/*CASOS MENSUALES POR CADA ZONA REGIONAL*/
import { where, Op, fn, col, Sequelize } from "sequelize";

export async function localizaciones(models) {
  //arreglo para guardar los resultados de la consulta
  var localizaciones_array = [];

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
      const cantidad_tickets = tickets.length;
      
      //agregar resultados
      localizaciones_array.push({
        nombre: localizaciones[i].name,
        cantidad: cantidad_tickets,
      });

      localizaciones_array.sort(function (a,b) {
        if (a.cantidad < b.cantidad) {
          return 1;
        }
        if (a.cantidad > b.cantidad) {
          return -1;
        }
        return 0;
      })

      while (localizaciones_array.length>5) {
        localizaciones_array.pop();
      }
    }

    return localizaciones_array;
  } catch (error) {
    return error
  }
}
