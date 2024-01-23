import React from 'react'
import ItemLink from '../../components/ItemLink/ItemLink.tsx';
import "./Intro.css"

function Intro() {
  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">InnoHub Marketing Agency</p>
          <h1 className="h1 hero-title">We are available for marketing</h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporthem incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporthem incididunt ut labore et dolore magna aliqua.

          </p>
          <ItemLink
            href="#"
            title="Get Start"
            className="btn btn-primary btn-hero"
          />
        </div>
        <figure className="hero-baner">
          <img
            src="/assets/images/hero-banner.png"
            width="720"
            height="673"
            alt=" hero banner"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  )
}

export default Intro