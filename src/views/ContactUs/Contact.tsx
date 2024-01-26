import React from "react";
import { IonIcon } from "@ionic/react";
import { mailOutline, mapOutline, headsetOutline } from "ionicons/icons";
import "./Contact.css";
function Contact() {
  return (
    <section className="section contact" id="contactUs" aria-label="contact">
      <div className="container">
        <h2 className="h2 section-title">Contactos</h2>
        <p className="section-text">
          ¿Tienes preguntas, ideas o estás listo para iniciar tu próximo
          proyecto publicitario? Estamos aquí para escucharte. Ponte en contacto
          con Albert Jota Publicidad y descubre cómo podemos trabajar juntos
          para alcanzar tus metas.
        </p>
        {/* <form className="contact-form">
          <div className="input-wraper">
            <input
              type="text"
              name="name"
              arial-label="name"
              placeholder="Your Name"
              required
              className="input-field"
            />
            <input
              type="email"
              name="email_adress"
              aria-label="email"
              placeholder="Email Adress"
              required
              className="input-field"
            />
          </div>
          <div className="input-wraper">
            <input
              type="text"
              name="subject"
              arial-label="subject"
              placeholder="Subject"
              className="input-field"
            />
            <input
              type="number"
              name="phone"
              aria-label="phone"
              placeholder="Phone-Number"
              className="input-field"
            />
          </div>
          <textarea
            name="message"
            aria-label="message"
            placeholder="Your message..."
            required
            className="input-field"
          ></textarea>
          <div className="checkbox-wraper">
            <input
              type="checkbox"
              id="terms"
              name="terms_and_policy"
              required
              className="checkbox"
            />
            <label htmlFor="terms" className="label">
              Accept{" "}
              <a href="#" className="label-link">
                Terms of Services
              </a>{" "}
              and{" "}
              <a href="#" className="label-link">
                Privacy Policy
              </a>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
        <ul className="contact-list">
          <li className="contact-item">
            <div className="contact-card">
              <div className="card-icon">
                <IonIcon icon={mailOutline} />
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">Correo Electrónico</h3>
                <a href="#" className="card-link">
                  albertjpublicidad@yahoo.es
                </a>
                <a href="#" className="card-link">
                  albertjpublicidad@gmail.com
                </a>
              </div>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-card">
              <div className="card-icon">
                <IonIcon icon={mapOutline} />
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">Ubicación</h3>
                <a href="#" className="card-link">
                  Palmira, Valle del Cauca, Colombia
                </a>
              </div>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-card">
              <div className="card-icon">
                <IonIcon icon={headsetOutline} />
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">Llama o Escribe</h3>
                <a href="#" className="card-link">
                  +57 318 833 1399
                </a>
                <a href="#" className="card-link">
                  +57 315 475 5012
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
