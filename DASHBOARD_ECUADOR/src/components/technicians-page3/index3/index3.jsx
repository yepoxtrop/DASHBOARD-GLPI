{
  /*COMPONENTES*/
}
import Header from "../../header/header.jsx";
import Footer from "../../footer/footer.jsx";
import CardTechnicians from "../../technicians-page3/card/cardTechnicians.jsx";
import Progress from "../../progress/progress.jsx";

{
  /*ESTILOS*/
}
import "../../../css/cards/cards.css";
import "../../../css/progress/progress.css";

{
  /*RUTAS API*/
}
import { getCountTicketsTechniciansTotal } from "../../../api/connection.js";

{
  /*HOOKS*/
}
import { useEffect, useState } from "react";

export default function Index3() {
  const [tecnicos, setTecnicos] = useState([]);
  const [progress, setProgress] = useState(true);

  useEffect(() => {
    const findTechnicians = async () => {
      try {
        const datosTecnicos = await getCountTicketsTechniciansTotal();
        setTecnicos(datosTecnicos.data.tecnicos);
        setProgress(false);
      } catch (error) {
        console.log(error);
      }
    };

    findTechnicians();
    const intervalId = setInterval(findTechnicians, 30000);
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
          <CardTechnicians props={tecnicos} />
        </div>
      </section>

      <Footer />
    </>
  );
}
