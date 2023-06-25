import ConfirmCiteC from "../../components/container/confirmCiteC/ConfirmCiteC";
import "./ConfirmCite.css";

const data_cite = [{ fecha: "25/11/2023" }, { fecha: "25/11/2023" }];

const ConfirmCite = () => {
  return (
    <>
      <div className="confirmCite-page">
        <h1>Confirma tu cita 24hrs antes !!!</h1>
        <div className="container-confirmCiteC">
          {data_cite.map((item, index) => (
            <ConfirmCiteC namePlaceholder={item.fecha} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ConfirmCite;
