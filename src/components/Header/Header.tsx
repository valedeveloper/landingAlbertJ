import React, { useEffect, useState } from "react";
import ItemLink from "../ItemLink/ItemLink.tsx";
import Button from "../Button/Button.tsx";
import { listMenu } from "./listMenu";
import "./Header.css";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMenuActive(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onToggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          <img src="/assets/images/LogoBlancoAlbertJ-sinfondo.png"  alt="Logo Albert J"/>
        </a>

        <nav className={"navbar container " + (isMenuActive && "active")}>
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
          </ul>
          
        </nav>
        <Button onToggleMenu={onToggleMenu} isMenuActive={isMenuActive} />
      </div>
    </header>
  );
}

export default Header;
