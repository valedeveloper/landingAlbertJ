import React from "react";
import ItemLink from "../ItemLink/ItemLink.tsx";
import Button from "../Button/Button.tsx";
import { itemsMenu } from "./itemsMenu.js";
import { scrollToSection } from '../../utilities/scrollToSection.js';
import { buildWhatsAppLink } from "../../utilities/buildWhatsAppLink.js";
import { useMenu } from '../../hooks/useMenu.ts';
import "./Header.css";
function Header(): JSX.Element {
  const { isMenuActive, onToggleMenu } = useMenu()
  return (
    <header className="header" data-testid="header">
      <div className="container">
        <button onClick={() => scrollToSection("home")} className="logo">
          <img
            src="/assets/images/LogoBlancoAlbertJ-sinfondo.png"
            alt="Logo Albert J"
          />
        </button>
        <nav className={"navbar container " + (isMenuActive && "active ")}>
          <ul className="navbar-list">
            {itemsMenu.map((item) => (
              <ItemLink
                key={item.title}
                sectionId={item.sectionId}
                title={item.title}
                scrollToSection={scrollToSection}

              />
            ))}
            <li>
              <button
                className="btn btn-primary"
                onClick={buildWhatsAppLink}
              >
                Escríbenos
              </button>
            </li>
          </ul>
        </nav>
        <Button
          onToggleMenu={onToggleMenu}
          isMenuActive={isMenuActive}
        />
      </div>
    </header>
  );
}
export default Header;
