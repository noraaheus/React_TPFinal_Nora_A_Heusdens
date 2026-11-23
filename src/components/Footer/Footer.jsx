import "./Footer.css";
import Wsp from "../../assets/whatsapp.png";
import Ins from "../../assets/instagram.png";

export const Footer = () => {
  return (
    <footer>
      <nav>
        <ul className="nav-list">
          <li id="derechos">
            <span>©</span> Sitio realizado por Nora Heusdens para Talento Tech
          </li>

          <li className="iconos">
            <img src={Wsp} alt="Logo WhatsApp" />
            <img src={Ins} alt="Logo Instagram" />
          </li>
        </ul>
      </nav>
    </footer>
  );
};
