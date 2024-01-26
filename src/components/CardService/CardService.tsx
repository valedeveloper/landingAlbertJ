import React from "react";
import { CardServiceProps } from "@/app";
import "./CardService.css";



function CardService({ color, icon, title, desc }: CardServiceProps):JSX.Element {
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
