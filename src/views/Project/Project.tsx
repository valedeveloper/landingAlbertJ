import React from 'react';
import CardProject from '../../components/CardProject/CardProject.tsx';
import { listproject } from './listProjects';
import "./Project.css";

function Project():JSX.Element {
    return (
        <section className="section project" id="projectUs" aria-label="project">
            <div className="container">
                <h2 className="h2 section-title">Our Recent Projects</h2>
                <p className="section-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
            </div>
            {listproject.map(project => (
                <CardProject
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    subtitle={project.subtitle}
                // Agrega otras propiedades necesarias para tu componente CardProject
                />
            ))}
        </section>
    );
}

export default Project;
