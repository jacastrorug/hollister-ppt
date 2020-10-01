import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import "../assets/scss/26.scss";
import FooterNavigation from "../components/FooterNavigation";

const ForosInteractivos = (props) => (
  <Layout>
    <Helmet>
      <title>Foros Interactivos</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div>
      <section id="banner-finteractivos">
        <div className="finteractivos-container">

          <div className="title">
            <span className="tit1">Metodología</span><br></br>
            <span className="tit2">Foros interactivos</span><br></br>
            <span id="tit3">semipresenciales</span><br></br>
            <span id="tit4">de 10 a 20 profesionales de urología funcional*</span>
          </div>
          <div className="content">
            <span className="tit1">Una sede y foros satélite.</span>
            <span className="tit2">Agenda</span><br></br>
            <ul>
              <li>
                <h3>20h - 21.30h</h3>
                Bienvenida Hollister
              </li>
              <li>
                <h3>21.30 - 22.30h</h3>
                Ponencia con foro de debate y preguntas
              </li>
              <li>
                <h3>22.30</h3>
                Cena
              </li>
            </ul>
          </div>
        </div>
        <div className="note">
          <p>
            *Los encuentros se limitarán a 10 plazas en
            aquellos casos en que las autoridades restrinjan el
            aforo de los mismos debido a la evolución de la
            pandemia COVID-19.
              </p>
          <p>
            Así mismo, Hollister garantiza su realización con
            las medidas de seguridad establecidas.
              </p>
        </div>
      </section>
    </div>

    <FooterNavigation
      left={"/trabajo-colaborativo"}
      right={"/fin"}
    />
  </Layout>
);

export default ForosInteractivos;