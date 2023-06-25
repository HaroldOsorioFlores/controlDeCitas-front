import "./KnowUs.css";
import odontologia from "../../assets/consultorioDental.jpg";
import { useState } from "react";
const KnowUs = () => {
  return (
    <>
      <div className="knowUs-page">
        <img src={odontologia} alt="" className="page_conocenos-img" />
        <section className="section_conocenos">
          <h1>Conócenos</h1>
          <p>
            Bienvenido a las clínicas dentales Dientecitos, donde nos apasiona
            cuidar de tu salud bucal. Nos enorgullece ofrecer tratamientos
            dentales de la más alta calidad a precios asequibles, para que
            puedas disfrutar de una sonrisa radiante sin preocupaciones
            financieras. Nuestro equipo de profesionales altamente capacitados
            se dedica a brindar una atención personalizada a todos nuestros
            pacientes. Entendemos que cada persona es única, y nos comprometemos
            a escuchar tus necesidades y diseñar un plan de tratamiento adaptado
            a ti. Valoramos tu confianza y te aseguramos que serás atendido con
            respeto, calidez y comprensión en cada visita. En Dientecitos,
            invertimos en tecnología de vanguardia y utilizamos materiales de
            calidad para asegurar resultados duraderos y efectivos. Nuestro
            objetivo es superar tus expectativas y proporcionarte una
            experiencia dental cómoda y libre de estrés. Nuestro personal está
            capacitado para explicarte cada paso del proceso de manera clara y
            detallada, para que te sientas informado y tranquilo durante todo el
            tratamiento. 
          </p>
        </section>
      </div>
    </>
  );
};

export default KnowUs;
