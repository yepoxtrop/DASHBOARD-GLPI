{
  /*VECTORES*/
}
import { FaHashtag } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { BiBox } from "react-icons/bi";

{
  /*ESTILOS*/
}
import "../../../../css/index-page1/top/tableMonths/headerMonthZone.css";

export default function HeaderMonthTechnician() {
  return (
    <>
      <thead className="HeaderMonthZone">
        <tr className="tr-HeaderMonthZone">
          <th className="th-HeaderMonthZone" id="tt1-2">
            <div className="container-div-temp">
              <FaHashtag /> TOP
            </div>
          </th>
          <th className="th-HeaderMonthZone" id="tt2-2">
            <div className="container-div-temp">
              <FaRegUser /> TÉCNICO
            </div>
          </th>
          <th className="th-HeaderMonthZone" id="tt3-2">
            <div className="container-div-temp">
              <BiBox /> CASOS
            </div>
          </th>
        </tr>
      </thead>
    </>
  );
}
