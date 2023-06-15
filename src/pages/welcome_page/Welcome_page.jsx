import { Button_navLink } from "../../components";
import "./Welcome_page.css";

const data = [
  {
    title: "Solicitar cita por internet",
    name: "Solicitar",
    routerLink: "/signIn_page",
  },
  {
    title: "Solicitar cita por llamada",
    name: "Llamar",
    routerLink: "tel: +54938205664",
  },
];
const Welcome_page = () => {
  return (
    <div className="Welcome_page">
      <div className="Welcome_page-container">
        <h1>Solicitud de cita</h1>
        {data.map((item, index) => (
          <div key={index} className="container_first">
            <h2>{item.title}</h2>
            <Button_navLink name={item.name} routeLink={item.routerLink} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome_page;
