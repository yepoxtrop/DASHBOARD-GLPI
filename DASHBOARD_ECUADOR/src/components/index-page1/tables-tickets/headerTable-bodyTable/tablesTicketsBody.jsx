{
  /*ESTILOS*/
}
import "../../../../css/index-page1/tables-tickets/bodyTablesTickets.css";

{
  /*VECTORES*/
}
import { LuBellRing } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaSkull } from "react-icons/fa6";
import { GoAlertFill } from "react-icons/go";

{
  /*COMPONENTES*/
}
import TicketsDescription from "../tickets-description/ticketsDescription";

{
  /*HOOKS*/
}
import { useState } from "react";
import { link } from "../../../../api/connection.js";

export default function TablesTicketsBody(info) {
  const objetos = info.datos;
  const [estado, setEstado] = useState({});

  function toggle(indice) {
    setEstado((prev) => ({
      ...prev,
      [indice]: !prev[indice], // Solo cambia el estado del modal seleccionado
    }));
  }

  return (
    <>
      <tbody>
        {objetos.length === 0 ? (
          <tr className="tr-especial" aria-colspan={7}>
            <td className="td-especial" colSpan={7}>
              <div className="container-especial">
                <img
                  className="img-especial"
                  src="../../../../../public/assets/img/sin_casos.gif"
                />
              </div>
            </td>
          </tr>
        ) : (
          objetos.map((valor, indice) => (
            <tr
              key={indice}
              className={
                valor.status_caso == false ? "sin_tecnico" : "con_tecnico"
              }
              id={
                valor.time_window_alert == true &&
                valor.time_window_timeout == true
                  ? "vencido"
                  : valor.time_window_alert == true &&
                    valor.time_window_timeout == false
                  ? "no_vencido"
                  : "disponible"
              }
            >
              <td className="tr-body-tickets" id="data1">
                <a href={`${link}=${valor.id_caso}`} className="link_id_caso" target="_blank">
                  {valor.id_caso}
                </a>
              </td>
              <td className="tr-body-tickets" id="data2">
                {`${new Date(valor.date_caso).getDate()}-${
                  new Date(valor.date_caso).getMonth() + 1
                }-${new Date(valor.date_caso).getFullYear()}`}
              </td>
              <td className="tr-body-tickets" id="data3">
                {valor.priority_caso}
              </td>
              <td className="tr-body-tickets" id="data4">
                <span className="txt-user">{valor.user_caso}</span>
              </td>
              <td className="tr-body-tickets" id="data5">
                {valor.technician_caso}
              </td>
              <td className="tr-body-tickets" id="data6">
                {valor.time_caso}
              </td>
              <td className="tr-body-tickets" id="data7">
                <TicketsDescription
                  descripcion={valor.content_caso}
                  status={estado[indice] || false}
                  close={() => toggle(indice)}
                />

                {valor.time_window_alert == true &&
                valor.time_window_timeout == true ? (
                  <FaSkull
                    className="vector_alerta"
                    onClick={() => toggle(indice)}
                  />
                ) : valor.time_window_alert == true &&
                  valor.time_window_timeout == false ? (
                  <GoAlertFill
                    className="vector_emergencia"
                    onClick={() => toggle(indice)}
                  />
                ) : valor.status_caso == false ? (
                  <LuBellRing
                    className="vector_no_asignado"
                    onClick={() => toggle(indice)}
                  />
                ) : (
                  <IoMdCheckmarkCircleOutline
                    className="vector_asignado"
                    onClick={() => toggle(indice)}
                  />
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </>
  );
}
