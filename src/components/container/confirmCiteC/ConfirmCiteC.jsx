import Button_navLink from "../../common/button_navLink/Button_navLink";
import Input from "../../common/input/Input";
import "./ConfirmCiteC.css"
const data_button = [
  { name: "Confirmar" },
  { name: "Cancelar" },
  { name: "Reprogramar" },
];

const ConfirmCiteC = ({ namePlaceholder }) => {
  return (
    <>
      <div className="component-confirmCite">
        <div>
          <h2>Cita</h2>
          <Input placeHolder={namePlaceholder} />
        </div>
        {data_button.map((item, index) => (
          <Button_navLink name={item.name} key={index} />
        ))}
      </div>
    </>
  );
};

export default ConfirmCiteC;
