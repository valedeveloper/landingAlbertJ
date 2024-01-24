import React from 'react'
import CardService from '../../components/CardService/CardService.tsx'
import { listService } from './listService.js'


function Service() {
    return (
        <section className="section service" id="services" aria-label="service">
            <div className="container">
                <h2 className="h2 section-title">Nuestros Servicios</h2>
                <p className="section-text">
                    Potenciando tu Mensaje, Maximizando tu Impacto
                </p>
                <ul className="grid-list">

                    {
                        listService.map(service => (
                            <CardService
                                key={service.color}
                                color={service.color}
                                icon={service.icon}
                                title={service.title}
                                desc={service.desc}
                            />
                        ))
                    }
                    {/* <li className="service-card">
                        <div className="card-icon" style="background-color: #13c4a1;">
                            <ion-icon name="chatbox"></ion-icon>
                        </div>
                        <h3 className="h3">
                            <a href="#" className="card-title">SEO Optimization</a>
                        </h3>
                        <p className="card-text">
                            Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                    </li>
                    <li className="service-card">
                        <div className="card-icon" style="background-color: #6610F2;">
                            <ion-icon name="desktop"></ion-icon>
                        </div>
                        <h3 className="h3">
                            <a href="#" className="card-title">Digital Marketing</a>
                        </h3>
                        <p className="card-text">
                            Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                    </li>
                    <li className="service-card">
                        <div className="card-icon" style="background-color: #ffb700;">
                            <ion-icon name="bulb"></ion-icon>
                        </div>
                        <h3 className="h3">
                            <a href="#" className="card-title">Market Research</a>
                        </h3>
                        <p className="card-text">
                            Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                    </li>
                    <li className="service-card">
                        <div className="card-icon" style="background-color: #fc3549;">
                            <ion-icon name="phone-portrait"></ion-icon>
                        </div>
                        <h3 className="h3">
                            <a href="#" className="card-title">Keyword Targeting</a>
                        </h3>
                        <p className="card-text">
                            Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                    </li>
                    <li className="service-card">
                        <div className="card-icon" style="background-color: #00d288;">
                            <ion-icon name="archive"></ion-icon>
                        </div>
                        <h3 className="h3">
                            <a href="#" className="card-title">Email Marketing</a>
                        </h3>
                        <p className="card-text">
                            Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                    </li>
                    <li className="service-card">
                        <div className="card-icon" style="background-color: #13c4a1;">
                            <ion-icon name="build"></ion-icon>
                        </div>
                        <h3 className="h3">
                            <a href="#" className="card-title">Marketing & Reporting</a>
                        </h3>
                        <p className="card-text">
                            Sed ut perspiciatis unde omnis iste natus error sit tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                    </li> */}
                </ul>
            </div>
        </section>

    )
}

export default Service