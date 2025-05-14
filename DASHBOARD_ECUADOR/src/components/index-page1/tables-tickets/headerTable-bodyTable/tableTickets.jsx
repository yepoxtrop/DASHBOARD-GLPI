{
  /*COMPONENTES*/
}
import TablesTicketsHeader from "./tablesTicketsHeader.jsx";
import TablesTicketsBody from "./tablesTicketsBody.jsx";

export default function TableTickets({ data }) {
  const { nombre, casos } = data;
  return (
    <>
      <div className="contendor-por-tabla">
        <div className="tituloZona">
          <span className="nombreZona">{nombre.toUpperCase()}</span>
        </div>
        <div className="container-table-tickets">
          <table className="table-ticketst-zones">
            <TablesTicketsHeader />
            <TablesTicketsBody datos={casos}/>
          </table>
        </div>
      </div>
    </>
  );
}
