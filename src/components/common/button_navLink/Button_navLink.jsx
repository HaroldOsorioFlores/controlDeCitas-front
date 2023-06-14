import { NavLink } from "react-router-dom";

const Button_navLink = ({ name, routeLink }) => {
  return (
    <>
      <NavLink to={routeLink}>{name}</NavLink>
    </>
  );
};
export default Button_navLink;
