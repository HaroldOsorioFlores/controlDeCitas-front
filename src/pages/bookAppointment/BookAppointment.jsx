import { Form } from "react-router-dom";
import "./BookAppointment.css";
import { Button, Button_navLink, Input } from "../../components";

const data_input = [
  { label: "Seleccione mes de cita", placheHolder: "Mes" },
  { label: "Seleccione dia de cita", placheHolder: "Dia" },
  { label: "Selecciona hora de cita", placheHolder: "Hora" },
];

const data_hour = [
  { name: "09:00 - 10:00" },
  { name: "09:00 - 10:00" },
  { name: "09:00 - 10:00" },
  { name: "09:00 - 10:00" },
  { name: "09:00 - 10:00" },
  { name: "09:00 - 10:00" },
  { name: "09:00 - 10:00" },
];


const BookAppointment = () => {
  return (
    <>
      <div className="BookAppointment_page">
        <div className="BookAppointment_page-container">
          <h1>Reservar cita</h1>
          <Form method="post" className="BookAppointment_page-form">
            {data_input.map((item, index) => (
              <div className="container-input">
                <Input
                  placeHolder={item.placheHolder}
                  label={item.label}
                  key={index}
                />
              </div>
            ))}
            <Button_navLink name="Reservar Cita" routeLink="/makePayPage" />
          </Form>
          <div>
            <h2>Hora Disponible</h2>
            <div className="container-hour">
              {data_hour.map((item, index) => (
                <Button name={item.name} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
