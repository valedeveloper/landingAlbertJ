import React from "react";
import { IonIcon } from "@ionic/react";
import { checkmark, play } from "ionicons/icons";
import "./About.css";
function About() {
  const listOption = [
    {
      id: 1,
      desc: "Descubrimos la esencia única de cada marca, convirtiéndola en campañas que no solo atraen la atención, sino que también dejan una huella duradera en la mente de la audiencia.",
    },
    {
      id: 2,
      desc: "Mentes creativas, estrategas astutos y profesionales dedicados se unen para ofrecer soluciones que destacan en un paisaje publicitario dinámico. Buscamos la excelencia en cada detalle para superar las expectativas y forjar un camino hacia el éxito.",
    },
    {
      id: 3,
      desc: "Impulsados por la excelencia, perfeccionamos cada acción, desde la gestación de ideas hasta la ejecución de campañas. Superamos expectativas con orgullo, entregando resultados que trascienden.",
    },
    {
      id: 4,
      desc: "Creemos en el poder transformador de la publicidad, esforzándonos no solo por el éxito comercial, sino también por contribuir al bienestar social y ambiental, guiando nuestra práctica hacia un impacto positivo duradero.",
    },
  ];
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-banner img-holder">
          <img
            src="./assets/images/about-banner.jpg"
            width="720px"
            height="960"
            loading="lazy"
            alt="about banner"
            className="img-cover"
          />
          <button className="play-btn" aria-label="Play video">
            <IonIcon icon={play} />
          </button>
        </div>
        <div className="about-content">
          <h2 className="h2 section-title">Nosotros</h2>
         

          <h3 className="h3">¿Quiénes somos?</h3>
          <p className="section-text">
          Con más de 15 años de experiencia en el sector, hemos perfeccionado
            el arte de captar la atención y convertirla en resultados tangibles.
            Desde estrategias innovadoras hasta ejecuciones impecables, cada
            paso que damos está diseñado para destacar tu mensaje en un mercado
            cada vez más competitivo.
          </p>

          <h3 className="h3">Nuestro Pilares</h3>
          <ul className="about-list">
            {listOption.map((option) => (
              <li key={option.id} className="about-item">
                <IonIcon icon={checkmark} />
                <span className="section-text">
                  {option.desc}
                </span>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </section>
  );
}

export default About;
