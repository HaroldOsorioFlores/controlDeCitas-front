import { Link } from "react-router-dom";
import "./Button_navLink.css";

const Button_navLink = ({ name, routeLink, type }) => {
  return (
    <>
      <Link to={routeLink} className="btn-navlink" type={type} >
        {name}
      </Link>
    </>
  );
};
export default Button_navLink;
