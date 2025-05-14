{
  /*COMPONENTES*/
}
import HeaderMonthZone from "./headerMonthZone.jsx";
import BodyMonth from "./bodyMonth.jsx";

{
  /*ESTILOS*/
}
import "../../../../css/index-page1/tables/tables.css";
import "../../../../css/index-page1/top/tableMonths/tables.css";

{
  /*VECTORES*/
}
import { BsFillQuestionCircleFill } from "react-icons/bs";

export default function TableMonthsZone(props) {
  const { topZones } = props;

  return (
    <>
      <div className="cont3-top-tables">
        <div className="cont1-top-tables">
          <span className="tit-tables-top">TOP #5 ZONAS REGIONALES</span>
          <BsFillQuestionCircleFill className="svg-tables-top" />
        </div>
        <div className="cont2-top-tables">
          <table>
            <HeaderMonthZone />
            {topZones.map((data, index) => (
              <BodyMonth data={data} index={index} key={index} />
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
