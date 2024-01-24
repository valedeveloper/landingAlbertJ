import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowUp } from 'ionicons/icons';
import './TopButton.css'
const TopButton = () => {
    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <a href="#top" aria-label="back to top" onClick={handleBackToTop} className="back-top-btn active">
            <IonIcon icon={arrowUp} aria-hidden="true" />
        </a>
    );
};

export default TopButton;
