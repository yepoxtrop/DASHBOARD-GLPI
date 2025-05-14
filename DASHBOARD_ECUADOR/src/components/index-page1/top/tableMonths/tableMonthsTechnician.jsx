{
  /*COMPONENTES*/
}
import HeaderMonthTechnician from "./headerMonthTechnician.jsx";
import BodyMonth from "./bodyMonth.jsx";

{
  /*ESTILOS*/
}
import "../../../../css/index-page1/top/tableMonths/tables.css";
import "../../../../css/index-page1/tables/tables.css";

{
  /*VECTORES*/
}
import { BsFillQuestionCircleFill } from "react-icons/bs";

export default function TableMonthsTechnician(props) {
  const { topTecnicos } = props;

  return (
    <>
      <div className="cont3-top-tables">
        <div className="cont1-top-tables">
          <span className="tit-tables-top">TOP #5 DE TÉCNICOS</span>
          <BsFillQuestionCircleFill className="svg-tables-top" />
        </div>
        <div className="cont2-top-tables">
          <table>
            <HeaderMonthTechnician />
            {topTecnicos.map((data, index) => (
              <BodyMonth data={data} index={index} key={index} />
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
