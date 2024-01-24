import React from "react";
import "./ItemLink.css";

type Props = {
  href: string;
  title: string;
  className?: string;
  isWhatsApp?: boolean;
};
function ItemMenu({ href, title, className, isWhatsApp=false }: Props) {
  const linkProps = isWhatsApp
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <li>
      <a href={href} className={className ?? "navbar-link"} {...linkProps}>
        {title}
      </a>
    </li>
  );
}

export default ItemMenu;
