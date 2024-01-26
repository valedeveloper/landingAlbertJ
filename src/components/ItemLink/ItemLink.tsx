import React from "react";
import "./ItemLink.css";

interface ItemProps {
  href: string;
  title: string;
  className?: string;
  isWhatsApp?: boolean;
  isScroll?: boolean;
};
function ItemMenu({ href,title,className,isWhatsApp = false}: ItemProps):JSX.Element {
  const linkProps = isWhatsApp ? { target: "_blank", rel: "noopener noreferrer" } :{}
  return (
    <li> <a
      href={href}
      className={className ?? "navbar-link "}
      {...linkProps}
    >{title}</a></li>
  );
}

export default ItemMenu;
