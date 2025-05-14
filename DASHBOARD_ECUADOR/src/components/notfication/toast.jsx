{
  /*ICONOS*/
}
import { GoAlertFill } from "react-icons/go";
import { FaSkull } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import musica from "../../../public/assets/img/notification.mp3"

{
  /*ESTILOS*/
}
import "../../css/notication/notification.css";

{
  /*HOOKS*/
}
import { useState } from "react";
import { useEffect } from "react";
import useSound from "use-sound";


export default function Toast({ estado, setEstado }) {
    const [play] = useSound(musica);

    function closeToast() {
      setEstado(false);
      
    }

    return (
      <>
        <div className={`notification${estado == true ? "_show" : "_hide"}`}>
          <div className="notification_header">
            <div className="notification_header_title">
              <GoAlertFill className="notification_icon" />
              <span className="notification_title">ALERTA</span>
            </div>
  
            <div className="notification_header_close">
              <IoMdClose className="notification_icon_close" onClick={closeToast} />
            </div>
          </div>
          <div className="notification_body">
            <span className="notification_description">
              HAY CASOS QUE VENCIERON, VAN A VENCER O NO TIENEN TÉCNICO ASIGNADO
            </span>
          </div>
        </div>
      </>
    );
  }
  