//Consoltas hechas
import {localizaciones} from "../../models/query/count_tickets/locations.js";

//Modelos
import glpi_locations from "../../models/glpi_locations.js";
import glpi_tickets from "../../models/glpi_tickets.js";

export const encontrar_zonas = async (req, res) => {
  try {
    const zonas = await localizaciones({ glpi_locations, glpi_tickets });

    res.json({
      message: "ZONAS REGIONALES",
      zonas,
    });
  } catch (error) {
    res.json({ error });
  }
};
