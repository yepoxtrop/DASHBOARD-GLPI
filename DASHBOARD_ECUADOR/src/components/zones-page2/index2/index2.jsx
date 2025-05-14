{
  /*COMPONENTES*/
}
import Header from "../../header/header.jsx";
import Footer from "../../footer/footer.jsx";
import CardZones from "../card/cardZones.jsx";
import Progress from "../../progress/progress.jsx";

{
  /*ESTILOS*/
}
import "../../../css/cards/cards.css";
import "../../../css/progress/progress.css";

{
  /*HOOKS*/
}
import { useState, useEffect } from "react";

{
  /*RUTAS API*/
}
import { getCountTicketsRegionalZoneTotal } from "../../../api/connection.js";

export default function Index2() {
  const [zonas, setZonas] = useState([]);
  const [progress, setProgress] = useState(true);

  useEffect(() => {
    const findZones = async () => {
      try {
        const datosTecnicos = await getCountTicketsRegionalZoneTotal();
        setZonas(datosTecnicos.data.zonas);
        setProgress(false);
      } catch (error) {
        console.log(error);
      }
    };

    findZones();
    const intervalId = setInterval(findZones, 30000);
    // Limpiar intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header />

      <section>
        <div
          className={
            progress === true
              ? "container-progress-father"
              : "container-progress-father-hidden"
          }
        >
          <Progress value={progress} />
        </div>
      </section>

      <section>
        <div
          className={
            progress === true ? "container-cards-hidden" : "container-cards"
          }
        >
          <CardZones props={zonas} />
        </div>
      </section>

      <Footer />
    </>
  );
}
