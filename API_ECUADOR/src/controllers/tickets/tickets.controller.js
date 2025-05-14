//Consultas hechas
import { info_tickets } from "../../models/query/info_tickets/info_tickets.js";

//Modelos
import glpi_tickets from "../../models/glpi_tickets.js"; //este es propio del controlador
import glpi_tickets_users from "../../models/glpi_tickets_users.js";
import glpi_users from "../../models/glpi_users.js";
import {priorities} from "../../models/query/info_tickets/priorities.js";//array con las prioridades
import glpi_locations from '../../models/glpi_locations.js';


export const encontrar_tickets = async (req, res) => {
  try {
    const tickets_activos = await glpi_tickets.findAll({
      where: {
        status: [1, 2],
        entities_id: 1,
        is_deleted: false,
      },
      order:[
        ['locations_id', 'ASC']
      ]
    });

    const tickets = await info_tickets(tickets_activos, {
      glpi_tickets_users,
      glpi_users,
      glpi_locations
    }, priorities);

    res.json({
      Comment: "CASOS SIN RESOLVER",
      tickets,
    });
  } catch (error) {
    res.json(error);
  }
};
