import React from "react";
import { buildWhatsAppLink } from "../../utilities/buildWhatsAppLink.js";
import "./CallAction.css";
function CallAction() {
  return (
    <section
      data-testid="callAction"
      className="section cta"
      aria-label="cta"
      style={{ backgroundImage: "url(/assets/images/cta-bg.jpg)" }}
    >
      <div className="container">
        <p className="cta-subtitle">¿Y Ahora, Qué Sigue?</p>
        <h2 className="h2 section-title">
          ¿Estás Preparado? ¡Vamos a Trabajar!
        </h2>
        <button className="btn btn-secondary" onClick={buildWhatsAppLink}>
          Escríbenos
        </button>
      </div>
    </section>
  );
}
export default CallAction;
