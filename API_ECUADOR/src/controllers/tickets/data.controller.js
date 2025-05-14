//Consoltas hechas
import { localizaciones } from "../../models/query/count_tickets/locations.js";
import { data_tickets } from "../../models/query/info_tickets/data_tickets.js";
import { priorities } from "../../models/query/info_tickets/priorities.js";

//Modelos
import glpi_locations from "../../models/glpi_locations.js";
import glpi_tickets from "../../models/glpi_tickets.js";
import glpi_users from "../../models/glpi_users.js";

export const encontrar_data = async (req, res) => {
  try {
    const zonas = await data_tickets(
      { glpi_locations, glpi_tickets, glpi_users },
      priorities
    );

    res.json({
      message: "ZONAS REGIONALES",
      zonas,
    });
  } catch (error) {
    res.json({ error });
  }
};
