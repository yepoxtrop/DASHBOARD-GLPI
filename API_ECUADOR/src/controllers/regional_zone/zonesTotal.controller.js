//Consoltas hechas
import {localizacionesTotales} from "../../models/query/count_tickets/locationsTotal.js";

//Modelos
import glpi_locations from "../../models/glpi_locations.js";
import glpi_tickets from "../../models/glpi_tickets.js";

export const encontrar_zonas_totales = async (req, res) => {
  try {
    const zonas = await localizacionesTotales({ glpi_locations, glpi_tickets });

    res.json({
      message: "ZONAS REGIONALES TOTALES",
      zonas,
    });
  } catch (error) {
    res.json({ error });
  }
};
