{
  /*VECTORES*/
}
import { FaHashtag } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { BiBox } from "react-icons/bi";

{
  /*ESTILOS*/
}
import "../../../../css/index-page1/tables-tickets/headerTablesTickets.css";

export default function TablesTicketsHeader() {
  return (
    <>
      <thead className="HeaderTicketTable">
        <tr className="tr-headerTicketTable">
          <th className="th-headerTicketTable" id="tt1">
            <div className="container-div-table-tickets">
              <FaHashtag />
              ID
            </div>
          </th>
          <th className="th-headerTicketTable" id="tt2">
            <div className="container-div-table-tickets">
              <MdDateRange />
              FECHA
            </div>
          </th>
          <th className="th-headerTicketTable" id="tt3">
            <div className="container-div-table-tickets">
              <FaRegBell />
              PRIORIDAD
            </div>
          </th>
          <th className="th-headerTicketTable" id="tt4">
            <div className="container-div-table-tickets">
              <BsPeople />
              SOLICITANTE
            </div>
          </th>
          <th className="th-headerTicketTable" id="tt5">
            <div className="container-div-table-tickets">
              <FaRegUser />
              TÉCNICO
            </div>
          </th>
          <th className="th-headerTicketTable" id="tt6">
            <div className="container-div-table-tickets">
              <FaRegClock />
              TIEMPO
            </div>
          </th>
          <th className="th-headerTicketTable" id="tt7">
            <div className="container-div-table-tickets">
              <BiBox />
            </div>
          </th>
        </tr>
      </thead>
    </>
  );
}
