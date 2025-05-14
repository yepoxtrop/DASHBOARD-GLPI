import { AlertTickets } from "../../models/query/alert/alertTickets.js";
import glpi_tickets from "../../models/glpi_tickets.js";
import glpi_tickets_users from "../../models/glpi_tickets_users.js";
import { priorities } from "../../models/query/info_tickets/priorities.js";

export const alertas = async (req, res) => {
  try {
    const alerts = await AlertTickets(glpi_tickets, glpi_tickets_users, priorities);
    console.log(alerts);
    res.json({ message: "ALERTAS", alerts });
  } catch (error) {
    return error;
  }
};
