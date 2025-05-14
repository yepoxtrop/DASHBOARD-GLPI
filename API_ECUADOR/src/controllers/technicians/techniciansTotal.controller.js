//Consultas hechas
import { tickets_technicians_total } from "../../models/query/count_tickets/techniciansTotal.js";

//Modelos
import glpi_users from "../../models/glpi_users.js";
import glpi_profiles_users from "../../models/glpi_profiles_users.js";
import glpi_tickets from "../../models/glpi_tickets.js";
import glpi_tickets_users from "../../models/glpi_tickets_users.js";


glpi_tickets_users.belongsTo(glpi_tickets, {
  foreignKey: "tickets_id",  // Clave foránea en glpi_tickets_users
  as: "ticket",              // Alias para el modelo relacionado
});
glpi_tickets.hasMany(glpi_tickets_users, {
  foreignKey: "tickets_id",  // Clave foránea en glpi_tickets_users
  as: "ticket_users",       // Alias para el modelo relacionado
});

export const encontrar_tecnicos_total = async (req, res) => {
  try {
    //conseguir tecnicos
    const tecnicos = await tickets_technicians_total({
      glpi_users,
      glpi_profiles_users,
      glpi_tickets,
      glpi_tickets_users,
    });

    res.json({
      message: "TECNICOS",
      tecnicos,
    });
  } catch (error) {
    res.json({ error });
  }
};
