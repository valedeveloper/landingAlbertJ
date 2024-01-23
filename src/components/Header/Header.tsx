import React, { useEffect, useRef, useState } from "react";
import ItemLink from "../ItemLink/ItemLink.tsx";
import Button from "../Button/Button.tsx";
import { listMenu } from "./listMenu";
import "./Header.css";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Verificar el tamaño de la pantalla y actualizar el estado según sea necesario
     ; // Por ejemplo, activa el menú si el ancho de la pantalla es mayor que 768px
    };

    // Agregar el event listener al cargar el componente
    window.addEventListener("resize", ()=> setIsMenuActive(window.innerWidth > 768));

    // Llamar al manejador de cambio de tamaño al cargar el componente
    handleResize();

    // Eliminar el event listener al desmontar el componente
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
          Albert Jota
        </a>

        <nav  className={"navbar container " + (isMenuActive && "active")}>
          <ul className="navbar-list">
            {listMenu.map((item) => (
              <ItemLink
                key={item.title}
                href={item.href}
                title={item.title}
                className={item.className}
              />
            ))}
          </ul>
        </nav>
        <Button onToggleMenu={onToggleMenu} />
      </div>
    </header>
  );
}

export default Header;
