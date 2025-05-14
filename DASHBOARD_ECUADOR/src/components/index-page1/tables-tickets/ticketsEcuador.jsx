{
  /*COMPONENTES*/
}
import TableTickets from "./headerTable-bodyTable/tableTickets";

{/*ESTILOS*/}
import "../../../css/index-page1/tables-tickets/tableTickets-final.css";

export default function TicketsEcuador(props) {
    const {casos} = props;
  return (
    <>
      <div className="tickets-container-zone">
        {casos.map((data, index)=>(
            <TableTickets data={data} key={index}/>
        ))}
      </div>
    </>
  );
}
