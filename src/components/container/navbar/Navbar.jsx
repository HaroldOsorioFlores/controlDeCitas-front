import Button_navLink from "../../common/button_navLink/Button_navLink";

const data = [
  { name: "Iniciar Sesion", routerLink: "/signIn_page" },
  { name: "Registrarse", routerLink: "/signUp_page" },
];
const Navbar = () => {
  return (
    <>
      <div className="navbar_top">
        <p>Numero: +54 999 359 584</p>
      </div>
      <div className="navbar_bot">
        <nav>
          <div>
            {data.map((item, index) => (
              <Button_navLink
                name={item.name}
                routerLink={item.routerLink}
                key={index}
              />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
