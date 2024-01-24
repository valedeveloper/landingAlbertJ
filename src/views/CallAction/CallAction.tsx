import React from "react";
import ItemLink from "../../components/ItemLink/ItemLink.tsx";
import { buildWhatsAppLink } from "../../utilities/getLinkWhatsApp.js";
import "./CallAction.css";
function CallAction() {
  return (
    <section
      className="section cta"
      aria-label="cta"
      style={{ backgroundImage: "url(/assets/images/cta-bg.jpg)" }}
    >
      <div className="container">
        <p className="cta-subtitle">¿Y Ahora, Qué Sigue?</p>
        <h2 className="h2 section-title">¿Estás Preparado? ¡Vamos a Trabajar!</h2>
        <ItemLink
          href={buildWhatsAppLink()}
          className="btn btn-secondary"
          title="Contáctanos"
          isWhatsApp
        />
      </div>
    </section>
  );
}
export default CallAction;
