import React from 'react'
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
import "./Button.css"



function Button({onToggleMenu}) {
    return (
        <button
            className="nav-toggle-btn "
            aria-label="Toggle menu"
            onClick={onToggleMenu}
            data-nav-toggler
            >
            <IonIcon icon={menuOutline} className="open"></IonIcon>
            <IonIcon icon={closeOutline} className="close"></IonIcon>
        </button>
    )
}

export default Button