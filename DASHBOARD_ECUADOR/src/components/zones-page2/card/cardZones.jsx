{
    /*VECTORES*/
  }
  import { TbWorld } from "react-icons/tb";
  
  {
    /*ESTILOS*/
  }
  import "../../../css/cards/cards.css";
  import { useState } from "react";
  
  export default function CardZones({ props }) {
  
    return (
      <>
        {props.map((data, index) => (
          <div className="card" key={index}>
            <div className="image">
              <TbWorld  className="icon" />
            </div>
            <div className="info-card">
              <div className="info-tech">
                <span className="msg-db">{data.nombre}</span>
              </div>
              <div className="info-tech">
                <span className="title-db">Casos Mensuales:</span>
                <span className="msg-db">{data.cantidad_mensual}</span>
              </div>
              <div className="info-tech">
                <span className="title-db">Casos Totales:</span>
                <span className="msg-db">{data.cantidad_total}</span>
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
  