import { Form, Link } from "react-router-dom";
import "./SignUp_page.css";
import { Button_navLink, Input } from "../../components";
import googleLogo from "../../assets/googlelogo.webp";

const data = [
  { label: "Nombres", placheHolder: "Nombres", type: "text" },
  { label: "Apellidos", placheHolder: "Apellidos", type: "text" },
  {
    label: "Correo electronico",
    placheHolder: "Correo electronico",
    type: "email",
  },
  { label: "Contraseña", placheHolder: "Contraseña", type: "password" },
  { label: "Telefono", placheHolder: "Telefono", type: "number" },
];
const SignUp_page = () => {
  return (
    <div className="SignUp_page">
      <div className="SignUp_page-container">
        <h1>Registro de Usuario</h1>
        <Form method="post" action="" className="SignUp_page-form">
          {data.map((item, index) => (
            <div key={index} className="container-input">
              <Input placeHolder={item.placheHolder} label={item.label} type={item.type} />
            </div>
          ))}
          <Button_navLink
            name="Registrarse"
            routeLink="/signIn_page"
            type="submit"
          />
        </Form>
        <div className="SignUp_page-container_google">
          <p>-O-</p>
          <Link className="container_signUpGoogle">
            <img src={googleLogo} alt="Google" className="img_google" />
            Registrarse con Google
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp_page;
