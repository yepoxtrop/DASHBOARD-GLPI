//Consulta hecha
import { total_tickets } from "../../models/query/count_tickets/total_tickets.js";

//Modelos
import glpi_tickets from "../../models/glpi_tickets.js";
import { priorities } from "../../models/query/info_tickets/priorities.js";

export const encontrar_total_tickets = async (req, res) => {
  try {
    const tickets = await total_tickets(glpi_tickets, priorities);
    res.json({
      message: "TOTAL CASOS",
      tickets,
    });
  } catch (error) {
    res.json(error);
  }
};
