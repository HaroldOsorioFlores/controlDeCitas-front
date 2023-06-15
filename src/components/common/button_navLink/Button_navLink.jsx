import { Link } from "react-router-dom";
import "./Button_navLink.css";

const Button_navLink = ({ name, routeLink }) => {
  return (
    <>
      <Link to={routeLink} className="btn-navlink">
        {name}
      </Link>
    </>
  );
};
export default Button_navLink;
