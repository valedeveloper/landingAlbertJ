import React from 'react';
import { IonIcon } from "@ionic/react";
import { logoWhatsapp } from "ionicons/icons";
import './WhatsAppButton.css'
import { buildWhatsAppLink } from '../../utilities/getLinkWhatsApp';
const WhatsAppButton = () => {
   
    return (
        <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className='whatsapp-floating-button ' >
            <a ><IonIcon icon={logoWhatsapp} className='whatsapp-icon' /></a>
        </a>
    );
};

export default WhatsAppButton;
