{
  /*ESTILOS CSS*/
}
import "../../../css/header/titulo/title.css";

{
  /*VECTORES*/
}
import { PiHeadsetFill } from "react-icons/pi";
import { BsLaptop } from "react-icons/bs";

export default function TitleDashboard() {

  return (
    <>
      <div className="container">
        <a href="#" className="link">
          <PiHeadsetFill className="vector-1"/>
          <BsLaptop className="vector-2"/>
          <h1 className="title">HelpDesk Ecuador</h1>
        </a>
      </div>
    </>
  );
}
