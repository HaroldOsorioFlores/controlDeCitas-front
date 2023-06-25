import { Button_navLink, Input } from "../../components";
import "./MakePayPage.css";

const MakePayPage = () => {
  return (
    <>
      <div className="MakePayPage">
        <section className="realizar_pago-section">
          <h1>Realizar pago</h1>
          <div className="container-input">
            <Input
              label="Seleccionar método de pago"
              placeHolder="Método de pago"
              type="text"
            />
          </div>
          <Button_navLink name="Enviar" routeLink="/accountNumber"/>
        </section>
      </div>
    </>
  );
};

export default MakePayPage;
