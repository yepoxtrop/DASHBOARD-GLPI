{/*ESTILOS*/}
import "../../../../css/index-page1/top/tableMonths/bodyMonthZone.css";

export default function BodyMonth({ data, index }) {
  const { nombre, cantidad } = data;
  return (
    <>
      <tbody>
        <tr className="tr-body">
          <td className="td-bodyMonth" id="inf1">
            {index+1}
          </td>
          <td className="td-bodyMonth" id="inf2">
            {nombre.toLowerCase()}
          </td>
          <td className="td-bodyMonth" id="inf3">
            {cantidad}
          </td>
        </tr>
      </tbody>
    </>
  );
}
