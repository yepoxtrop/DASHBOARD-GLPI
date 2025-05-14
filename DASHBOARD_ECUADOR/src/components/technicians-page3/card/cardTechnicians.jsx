{
  /*VECTORES*/
}
import { MdEngineering } from "react-icons/md";

{
  /*ESTILOS*/
}
import "../../../css/cards/cards.css";
import { useState } from "react";

export default function CardTechnicians({ props }) {

  return (
    <>
      {props.map((data, index) => (
        <div className="card" key={index}>
          <div className="image">
            <MdEngineering className="icon" />
          </div>
          <div className="info-card">
            <div className="info-tech">
              <span className="msg-db">{data.nombre}</span>
            </div>
            <div className="info-tech">
              <span className="title-db">Casos Mensuales:</span>
              <span className="msg-db">{data.cantidad}</span>
            </div>
            <div className="info-tech">
              <span className="title-db">Casos Totales:</span>
              <span className="msg-db">{data.cantidadTotal}</span>
            </div>
            <div className="info-tech">
              <span className="title-db">Puesto:</span>
              <span className="msg-db">#{index + 1}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
