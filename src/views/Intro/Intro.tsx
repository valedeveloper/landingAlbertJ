import React from "react";
import { buildWhatsAppLink } from "../../utilities/buildWhatsAppLink.js";
import "./Intro.css";
function Intro(): JSX.Element {
  return (
    <section className="section hero" id="home" aria-label="hero"  data-testid="intro">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Albert Jota Publicidad</p>
          <h1 className="h1 hero-title">Tu Éxito Publicitario Comienza Aquí</h1>
          <p className="hero-text">
            Transformamos tus ideas en impacto. Desde publicidad visualmente
            cautivadora hasta estrategias de perifoneo que resuenan, nos
            dedicamos a elevar tu mensaje por encima del ruido. Descubre cómo
            nuestras soluciones integrales y nuestra dedicación inquebrantable
            pueden impulsar tu marca hacia nuevas alturas.
          </p>

          <li>
            <button
              className="btn btn-primary"
              onClick={buildWhatsAppLink}
            >
              Comienza Ya
            </button>

          </li>
        </div>
        <figure className="hero-baner">
          <img
            src="/assets/images/intro-banner.jpg"
            width="720"
            height="673"
            alt=" hero banner"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
}

export default Intro;
