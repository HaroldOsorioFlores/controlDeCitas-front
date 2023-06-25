import { Link } from "react-router-dom";
import Button_navLink from "../../common/button_navLink/Button_navLink";
import logoDental from "../../../assets/logoDental.webp";
import "./Navbar.css";

const data = [
  { name: "Iniciar Sesión", routerLink: "/signIn_page" },
  { name: "Registrarse", routerLink: "/signUp_page" },
];
const Navbar = () => {
  return (
    <>
      <div className="navbar_top">
        <p>Número: +54 999 359 584</p>
      </div>
      <nav className="navbar_bot">
          <Link to="/">
            <img src={logoDental} alt="" className="navbar_bot-logoDental" />
          </Link>
          <ul className="container-nav">
            <Link to="/">Conócenos</Link>
            <Link to="/welcome_page">Pedir Cita</Link>
          </ul>
          <div className="navbar_bot-buttons">
            {data.map((item, index) => (
              <Button_navLink
                name={item.name}
                routeLink={ item.routerLink}
                key={index}
              />
            ))}
          </div>
      </nav>
    </>
  );
};
export default Navbar;
