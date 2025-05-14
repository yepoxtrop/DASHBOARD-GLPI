{
  /*ESTILOS*/
}
import "../../../../css/index-page1/tables-tickets/tableTickets-final.css";
//import { Modal } from "@mui/material";

import { useRef, useEffect } from "react";

export default function TicketsDescription({ descripcion, status, close }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (status) {
      dialogRef.current?.showModal(); 
    } else {
      dialogRef.current?.close();
    }
  }, [status]);

  return (
    <>
      <dialog
        ref={dialogRef}
        className={status === true ? "modal-activa" : "modal-no-activa"}
      >
        <div className="imagen-modal">
          <img src="../../../../public/assets/img/vetana-modal.gif" alt="modales" />
        </div>
        <div className="texto-modal">
          <h3 className="titulo-modal">DESCRIPCIÓN DEL CASO</h3>
          <span className="text-description">{descripcion}</span>
          <button onClick={close} className="boton-modal">CERRAR</button>
        </div>
      </dialog>
    </>
  );
}
