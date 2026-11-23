import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo con nombre.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="logo EmMy" id="logo" />
          <span>EmMy</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
