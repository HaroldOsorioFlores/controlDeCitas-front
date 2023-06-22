import "./KnowUs.css";
import odontologia from "../../assets/odontologia.webp";
import { useState } from "react";
const KnowUs = () => {
  const [setPercy, Percy] = useState(0);
  const contador_percy = () => {
    const setPercy = Percy + 1;
  };
  const contadorPercy = () => {};
  return (
    <>
      <div>
        <img src={odontologia} alt="" />
        <section className="section_conocenos">
          <h1>Conocenos</h1>
          <p>
            En las clínicas dentales Dentix sabemos que la salud de su boca es
            lo más importante. Pero la salud de su bolsillo también. Por eso nos
            dedicamos a ofrecer la máxima calidad en nuestros tratamientos
            dentales a precios muy asequibles. Y sin olvidarnos de la atención
            personalizada a todos nuestros pacientes.
          </p>
        </section>

        <button onClick={() => contador_percy}>Percy</button>
        <div>{Percy}</div>
      </div>
    </>
  );
};

export default KnowUs;
