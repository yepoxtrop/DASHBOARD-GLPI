{
  /*COMPONENTES*/
}
import Header from "../../header/header.jsx";
import TicketsEcuador from "../tables-tickets/ticketsEcuador.jsx";
import TopInfo from "../top/topInfo.jsx";
import Footer from "../../footer/footer.jsx";
import Toast from "../../notfication/toast.jsx";

{
  /*RUTA DE LA API*/
}
import { getMonthTickets } from "../../../api/connection.js"; //PARA TICKETS MENSUALES
import { getCountTicketsRegionalZone } from "../../../api/connection.js"; //PARA CONTADOR DE CASOS POR ZONA
import { getCountTicketsTechnicians } from "../../../api/connection.js";
import { getTicketsTickets } from "../../../api/connection.js"; //INFORMACION DE TICKETS
import { getAlerts } from "../../../api/connection.js"; //PARA ALERTAS

{
  /*HOOKS*/
}
import { useState, useEffect, useRef } from "react";

{
  /*ESTILOS*/
}
import "../../../css/progress/progress.css";
import "../../../css/introduction/introduction.css";

{
  /*SONIDOS*/
}
import sonido from "../../../../public/assets/img/notification.mp3";

export default function Index() {
  {
    /*TICKETS MENSUALES-FUNCIONA*/
  }
  const [ticketsMensuales, getTocketsMensuales] = useState(0);

  useEffect(() => {
    const findTicketsMonths = async () => {
      try {
        const valorTicketsMensuales = await getMonthTickets();
        getTocketsMensuales(valorTicketsMensuales.data.tickets);
      } catch (error) {
        console.log(error);
      }
    };
    findTicketsMonths();
    const intervalId = setInterval(findTicketsMonths, 10000);
    // Limpiar intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  });

  {
    /*TABLA TOP DE ZONAS REGIONALES*/
  }
  const [topRegional, setTopRegional] = useState([]);

  useEffect(() => {
    const findTopRegional = async () => {
      try {
        const valorTopZone = await getCountTicketsRegionalZone();
        setTopRegional(valorTopZone.data.zonas);
      } catch (error) {
        console.log(error);
      }
    };
    findTopRegional();
    const intervalId = setInterval(findTopRegional, 10000);
    return () => clearInterval(intervalId);
  }, []);

  {
    /*TABLA TOP DE TECNICOS */
  }
  const [topTech, setTech] = useState([]);

  useEffect(() => {
    const findTopTech = async () => {
      try {
        const valorTopTech = await getCountTicketsTechnicians();
        setTech(valorTopTech.data.tecnicos);
      } catch (error) {
        console.log(error);
      }
    };
    findTopTech();
    const intervalId = setInterval(findTopTech, 10000);
    return () => clearInterval(intervalId);
  }, []);

  {
    /*TABLA DE CASOS*/
  }
  const [ticketsZone, setTicketsZone] = useState([]);

  useEffect(() => {
    const findTicketsZone = async () => {
      try {
        const ticketsZona = await getTicketsTickets();
        setTicketsZone(ticketsZona.data.zonas);
      } catch (error) {
        return error;
      }
    };

    findTicketsZone();
    const intervalId = setInterval(findTicketsZone, 10000);
    return () => clearInterval(intervalId);
  }, []);

  {
    /*SONIDO Y ALERTAS*/
  }

  const [notification, setNotification] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const findAlerts = async () => {
      try {
        const totalAlerts = await getAlerts();
        if (totalAlerts.data.alerts > 0) {
          setNotification(true);
          if (audioRef.current) {
            audioRef.current.play();
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    findAlerts();
    const intervalId = setInterval(findAlerts, 30000);
    return () => clearInterval(intervalId);
  }, []);

  const [introduction, setIntroduction] = useState(true);
  const dialogReferece = useRef(null);

  useEffect(() => {
    if (introduction == true) {
      dialogReferece.current?.showModal();
    } else {
      dialogReferece.current?.close();
    }
  }, [introduction]);

  function ocultarModal() {
    setIntroduction(false);
    dialogReferece.current?.close();
  }

  return (
    <>
      <Header />

      <Toast estado={notification} setEstado={setNotification} />

      <section>
        <TicketsEcuador casos={ticketsZone} />
      </section>

      {notification == true ? (
        <audio
          ref={audioRef}
          src="/assets/img/notification.mp3"
          loop
          autoPlay
        />
      ) : null}

      {/*INFORMACION DEL TOP EMPLEADOS/ZONAS Y EL TOTAL DE CASOS, MENSUALES*/}
      <section>
        <TopInfo
          topZones={topRegional}
          topTecnicos={topTech}
          totalTickes={ticketsMensuales}
        />
      </section>

      <dialog className="introduction" ref={dialogReferece} id="modal-introduction">
        <div className="index-modal">
          <h1 className="index-modal-title">BIENVENIDO</h1>
          <span className="index-modal-subtitle">
            ESTE DASHBOARD HACE USO DE SONIDO Y PESTAÑAS EMERGENTAS PARA MEJORAR
            TU INTERACTIVIDAD Y EXPERIENCIA
          </span>
          <img src="../../../../public/assets/img/introduction.gif" alt="imagen-modal" className="introduction-image"/>
        </div>
        <div className="index-modal-button">
          <button onClick={ocultarModal} className="index-button">Acepto</button>
        </div>
      </dialog>

      {/*FOOTER*/}
      <Footer />
    </>
  );
}
