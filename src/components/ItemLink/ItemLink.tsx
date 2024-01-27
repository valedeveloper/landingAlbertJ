import React from "react";
import { ItemProps } from "@/app";
import "./ItemLink.css";


function ItemMenu({ href, title, className, isWhatsApp = false, scrollToSection }: ItemProps): JSX.Element {
  const linkProps = isWhatsApp ? { target: "_blank", rel: "noopener noreferrer" } : {}
  return (
    <li> <a
      onClick={() => scrollToSection(href)}
      className={className ?? "navbar-link "}
      {...linkProps}
    >{title}</a></li>
  );
}

export default ItemMenu;
