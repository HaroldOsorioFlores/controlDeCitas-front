import "./AccountNumber.css";
import { Button, Input } from "../../components";
const AccountNumber = () => {
  return (
    <>
      <div className="AccountNumber_page">
        <h1>Pagar con numero de cuenta</h1>
        <div className="AccountNumber_page-code">
          <Button name="Generar codigo de pago" />
          <div className="container-input">
            <Input
              label="Codigo de pago"
              placeHolder="999-222-5-7-6"
              type="number"
            />
          </div>
        </div>
        <h2>Tiempo de caducidad: </h2>
        <div>
          <p>dd/mm/aa</p>
          <p>24 hrs</p>
        </div>
      </div>
    </>
  );
};
export default AccountNumber;
