import React from "react";
import "./CardService.css";

type Props = {
  color: string;
  icon: React.JSX.Element;
  title: string;
  desc: string;
};
function CardService({ color, icon, title, desc }: Props) {
  return (
    <li className="service-card" >
      <div className="card-icon" style={{ backgroundColor: `${color}` }}>{icon}</div>
      <h3 className="h3">
        <a href="#" className="card-title">
          {title}
        </a>
      </h3>
      <p className="card-text">{desc}</p>
    </li>
  );
}

export default CardService;
