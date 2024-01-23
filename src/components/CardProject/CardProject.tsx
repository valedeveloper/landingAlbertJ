import React from "react";
import "./CardProject.css";

type Props = {
  id: number;
  title: string;
  subtitle: string;
};
function CardProject({ id, title, subtitle }: Props) {
  return (
    <li>
      <div className="project-card">
        <figure
          className="card-banner img-holder"
          style={{ width: 510, height: 700 }}
        >
          <img
            src={`/assets/images/project-${id}.jpg`}
            width="510"
            height="700"
            loading="lazy"
            alt="Designing a better cinema experience"
            className="img-cover"
          />
        </figure>
        <div className="card-content">
          <p className="card-subtitle">{subtitle}</p>
          <h3 className="h3">
            <a href="" className="card-title">
              {title}
            </a>
          </h3>
          <a href="#" className="btn btn-primary">
            View Details
          </a>
        </div>
      </div>
    </li>
  );
}

export default CardProject;
