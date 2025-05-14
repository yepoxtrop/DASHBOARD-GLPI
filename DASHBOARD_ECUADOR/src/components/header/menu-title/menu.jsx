{
  /*HOOKS*/
}
import { useState } from "react";
import { Link } from "react-router-dom";

{
  /*CSS*/
}
import "../../../css/header/menu/menu.css";

{
  /*ICONOS*/
}
import { IoEarthSharp } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";

export default function Menu() {
  const [sizeDiv1, setSizeDiv1] = useState(false);
  const [sizeDiv2, setSizeDiv2] = useState(false);
  const [sizeDiv3, setSizeDiv3] = useState(false);

  function toggleSize1(isHover) {
    setSizeDiv1(isHover);
  }

  function toggleSize2(isHover) {
    setSizeDiv2(isHover);
  }

  function toggleSize3(isHover) {
    setSizeDiv3(isHover);
  }

  return (
    <>
      <nav>
        <ul>
          <div
            className="opcion"
            id={sizeDiv1 ? "menu1-large" : "menu1"}
            onMouseOver={() => toggleSize1(true)}
            onMouseOut={() => toggleSize1(false)}
          >
            <Link to="/Zonas_regionales">
              <IoEarthSharp
                id={sizeDiv1 ? "vector1-large" : "vector1"}
                className="vectores"
              />
              <li className="enlaces">ZONAS REGIONALES</li>
            </Link>
          </div>

          <div
            className="opcion"
            id={sizeDiv2 ? "menu2-large" : "menu2"}
            onMouseOver={() => toggleSize2(true)}
            onMouseOut={() => toggleSize2(false)}
          >
            <Link to="/">
              <BsBellFill
                id={sizeDiv2 ? "vector2-large" : "vector2"}
                className="vectores"
              />
              <li className="enlaces">CASOS SIN RESOLVER</li>
            </Link>
          </div>

          <div
            className="opcion"
            id={sizeDiv3 ? "menu3-large" : "menu3"}
            onMouseOver={() => toggleSize3(true)}
            onMouseOut={() => toggleSize3(false)}
          >
            <Link to="/Tecnicos">
              <IoPersonSharp
                id={sizeDiv3 ? "vector3-large" : "vector3"}
                className="vectores"
              />
              <li className="enlaces">HISTÓRICO TÉCNICOS</li>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
}
