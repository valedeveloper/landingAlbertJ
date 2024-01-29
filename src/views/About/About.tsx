import React from "react";
import { IonIcon } from "@ionic/react";
import { checkmark, play } from "ionicons/icons";
import {values} from './values';
import "./About.css";
function About() {
  
  return (
    <section className="section about" id="about"  data-testid="about">
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
            {values.map((option) => (
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
