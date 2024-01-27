import React from "react";
import { IonIcon } from "@ionic/react";
import { logoWhatsapp } from "ionicons/icons";
import { buildWhatsAppLink } from "../../utilities/getLinkWhatsApp";
import "./WhatsAppButton.css";
const WhatsAppButton = (): JSX.Element => {
  return (
    <button  className="whatsapp-floating-button ">
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IonIcon icon={logoWhatsapp} className="whatsapp-icon" />
      </a>
    </button>
  );
};

export default WhatsAppButton;
