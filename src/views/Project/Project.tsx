import React from 'react'
import { listproject } from './listProjects';
import "./Project.css"
import CardProject from '../../components/CardProject/CardProject.tsx';
function Project() {
    return (
        <section className="section project" id="projectUs" arial-label="project">
            <div className="container">
                <h2 className="h2 section-title">Our Recent Projects</h2>
                <p className="section-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
            </div>
            <ul className="grid-list">
                {
                    listproject.map(project => (
                        <CardProject
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            subtitle={project.subtitle}

                        />
                    ))
                }
            </ul>
        </section>

    )
}

export default Project