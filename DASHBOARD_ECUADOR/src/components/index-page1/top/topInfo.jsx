{
  /*COMPONENTES*/
}
import TableMonthsTechnician from "./tableMonths/tableMonthsTechnician.jsx";
import TableMonthsZone from "./tableMonths/tableMonthsZone.jsx";
import TicketsMonth from "./ticketsMonth/ticketsMonth.jsx";

{
  /*ESTILOS*/
}
import "../../../css/index-page1/top/tableMonths/tables.css";

export default function TopInfo({topZones, topTecnicos, totalTickes}) {    
  return (
    <>
      <div className="cont6-top-tables">
        <div className="cont4-top-tables">
          <TableMonthsZone topZones={topZones}/>
          <TableMonthsTechnician topTecnicos={topTecnicos}/>
        </div>
        <div className="cont5-top-tables">
          <TicketsMonth totalTickes={totalTickes}/>
        </div>
      </div>
    </>
  );
}
