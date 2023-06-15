import { Form, Link } from "react-router-dom";
import "./SignIn_page.css";
import { Input } from "../../components";
import googleLogo from "../../assets/googlelogo.webp";

const data = [
  { label: "Correo electronico", placheHolder: "Correo" },
  { label: "Contraseña", placheHolder: "Telefono" },
];
const SignIn_page = () => {
  return (
    <div className="SignIn_page">
      <div>
        <h1>Iniciar Sesion</h1>
        <h3>
          ¿Ya tienes cuenta? <Link>Crear Cuenta </Link>
        </h3>
        <Form method="post" action="">
          {data.map((item, index) => (
            <Input
              key={index}
              placeHolder={item.placheHolder}
              label={item.label}
            />
          ))}
          <Link type="submit" to="/">
            Iniciar Sesion
          </Link>
        </Form>
        <p>-O-</p>
        <Link>
          <img src={googleLogo} alt="Google" className="img_google" /> Iniciar
          Sesion con Google
        </Link>
      </div>
    </div>
  );
};
export default SignIn_page;
