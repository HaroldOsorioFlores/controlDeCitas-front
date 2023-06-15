import { Form, Link } from "react-router-dom";
import "./SignIn_page.css";
import { Button_navLink, Input } from "../../components";
import googleLogo from "../../assets/googlelogo.webp";

const data = [
  { label: "Correo electronico", placheHolder: "Correo", type:"email" },
  { label: "Contraseña", placheHolder: "Contraseña", type:"password" },
];
const SignIn_page = () => {
  return (
    <div className="SignIn_page">
      <div className="SignIn_page-container">
        <h1>Iniciar Sesion</h1>
        <h3>
          ¿Ya tienes cuenta? <Link to="/signUp_page">Crear Cuenta </Link>
        </h3>
        <Form method="post" action="" className="SignIn_page-form">
          {data.map((item, index) => (
            <div key={index} className="container-input">
              <Input placeHolder={item.placheHolder} label={item.label} type={item.type}/>
            </div>
          ))}
          <Button_navLink
            name="Iniciar Sesion"
            routeLink="/bookAppointment"
            type="submit"
          />
        </Form>
        <div className="SignIn_page-container_google">
          <p>-O-</p>
          <Link className="container_signInGoogle">
            <img src={googleLogo} alt="Google" className="img_google" /> Iniciar
            Sesion con Google
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignIn_page;
