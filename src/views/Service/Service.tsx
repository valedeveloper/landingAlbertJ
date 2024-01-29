import React from 'react'
import CardService from '../../components/CardService/CardService.tsx'
import { listService } from './listService.js'
function Service():JSX.Element {
    return (
        <section className="section service" id="services" aria-label="service" data-testid="service">
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
                </ul>
            </div>
        </section>
    )
}
export default Service