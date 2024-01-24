import React from 'react';
import Slider from 'react-slick';
import { listproject } from './listProjects';
import "./Project.css";
import CardProject from '../../components/CardProject/CardProject.tsx';

function Project() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="section project" id="projectUs" aria-label="project">
            <div className="container">
                <h2 className="h2 section-title">Our Recent Projects</h2>
                <p className="section-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
            </div>
            <Slider {...settings}>
                {listproject.map(project => (
                    <CardProject
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        subtitle={project.subtitle}
                        // Agrega otras propiedades necesarias para tu componente CardProject
                    />
                ))}
            </Slider>
        </section>
    );
}

export default Project;
