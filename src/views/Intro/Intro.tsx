import React from "react";
import ItemLink from "../../components/ItemLink/ItemLink.tsx";
import "./Intro.css";
import { buildWhatsAppLink } from "../../utilities/getLinkWhatsApp.js";

function Intro() {
  return (
    <section className="section hero" id="home" aria-label="hero">
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
          <ItemLink
            href={buildWhatsAppLink()}
            isWhatsApp
            title="Comienza Ya"
            className="btn btn-primary btn-hero"
          />
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
