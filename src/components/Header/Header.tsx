import React from "react";
import ItemLink from "../ItemLink/ItemLink.tsx";
import Button from "../Button/Button.tsx";
import { useMenu } from '../../hooks/useMenu.ts';
import { listMenu } from "./listMenu";
import { buildWhatsAppLink } from "../../utilities/getLinkWhatsApp.js";
import "./Header.css";
function Header(): JSX.Element {
  const { isMenuActive, onToggleMenu } = useMenu()
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          <img
            src="/assets/images/LogoBlancoAlbertJ-sinfondo.png"
            alt="Logo Albert J"
          />
        </a>

        <nav className={"navbar container " + (isMenuActive && "active ")}>
          <ul className="navbar-list">
            {listMenu.map((item) => (
              <ItemLink
                key={item.title}
                href={item.href}
                title={item.title}
                isWhatsApp={item.isWhatsApp}
                className={item.className}
              />
            ))}
            <li>
              <a
                href={buildWhatsAppLink()}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escríbenos
              </a>
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
