import React from "react";
import { IonIcon } from "@ionic/react";
import { logoWhatsapp } from "ionicons/icons";
import { buildWhatsAppLink } from "../../utilities/buildWhatsAppLink";
import "./WhatsAppButton.css";
const WhatsAppButton = (): JSX.Element => {
  return (
    <button className="whatsapp-floating-button " onClick={buildWhatsAppLink} data-testid="whatsAppButton" >
      <IonIcon icon={logoWhatsapp} className="whatsapp-icon" />
    </button>
  );
};

export default WhatsAppButton;
