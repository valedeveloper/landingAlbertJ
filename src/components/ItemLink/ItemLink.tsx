import React from "react";
import { ItemProps } from "@/app";
import "./ItemLink.css";


function ItemMenu({ sectionId, title, className, scrollToSection }: ItemProps): JSX.Element {
  return (
    <li>
      <button onClick={() => scrollToSection(sectionId)}
        className={className ?? "navbar-link "}
        data-testid="item-menu-button"
        >
        {title}
      </button> 
    </li>
  );
}

export default ItemMenu;
