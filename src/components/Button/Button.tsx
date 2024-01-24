import React from "react";
import { IonIcon } from "@ionic/react";
import { menuOutline, closeOutline } from "ionicons/icons";
import "./Button.css";

function Button({ onToggleMenu, isMenuActive }) {
  return (
    <button
      className="nav-toggle-btn "
      aria-label="Toggle menu"
      onClick={onToggleMenu}
      data-nav-toggler
    >
      {isMenuActive ? (
        <IonIcon icon={closeOutline} ></IonIcon>
      ) : (
        <IonIcon icon={menuOutline}></IonIcon>
      )}
    </button>
  );
}

export default Button;
