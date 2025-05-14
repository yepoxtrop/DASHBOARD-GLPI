{
  /*COMPONENTES*/
}
import TitleDashboard from "./menu-title/titulo.jsx";
import Menu from "./menu-title/menu.jsx";

export default function Header() {
  return (
    <>
      <header>
        <section>
          <TitleDashboard />
        </section>

        <section>
          <Menu />
        </section>
      </header>
    </>
  );
}
