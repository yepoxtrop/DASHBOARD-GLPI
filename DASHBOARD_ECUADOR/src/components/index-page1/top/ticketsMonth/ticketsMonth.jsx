{
  /*ICONOS*/
}
import { GiCoffeeCup } from "react-icons/gi";

{/*ESTILOS*/}
import "../../../../css/index-page1/top/ticketsMonth/ticketsMonth.css";

export default function TicketsMonth(props) {
    const{totalTickes} = props;
  return (
    <>
      <div className="containerCountTickets">
        <GiCoffeeCup className="vectorCoffe"/>
        <span className="totalTickes">CASOS TOTALES:</span>
        <span className="totalTickes">{totalTickes}</span>
      </div>
    </>
  );
}
