import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import Fondo from "../assets/images/18/fondo_18.png";
import ImagenEncabezado from "../assets/images/18/nombre.png";
import Salusplay from "../assets/images/18/logo-salusplay_blanco.png";
import FooterNavigation from "../components/FooterNavigation";

const AvanzadoUno = (props) => (
  <Layout>
    <Helmet>
      <title>Avanzado Uno</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div>
      <section id="banner-navanzadouno">
        <img src={ImagenEncabezado} alt="intro" className="icono-nivel" />
        <div className="texto-nivel-avanzado">
          <div className="logo-salus">
            <img src={Salusplay} alt="Salusplay" />
          </div>
          <div className="columnas-una">
            <div className="columnas-dos">
              <p className="titulo">
                <span>
                  <strong>
                    Experto universitario en competencias digitales en docencia
                    e investigación enfermera
                  </strong>
                </span>
              </p>
              <button className="btn-info">
                <i className="fa fa-plus"></i>&nbsp;info
              </button>
              <label className="subtitulo">
                Título propio de la Universidad Europea Miguel de Cervantes.
              </label>
              <p className="descripcion">
                <span>
                  <strong>Triple acreditación:</strong>
                </span>
                <br></br>
                <span className="desc-detalle">
                  Experto universitario - 30 ECTS (750 horas)
                </span>
                <br></br>
                <span className="desc-detalle">
                  Formación Continuada - 17,8 créditos CFC
                </span>
                <br></br>
              </p>
            </div>
            <div className="columnas-dos">
              <p className="titulo">
                <strong>
                  Experto universitario en herramientas digitales en la práctica
                  asistencial de enfermería
                </strong>
              </p>
              <button className="btn-info">
                <i className="fa fa-plus"></i>&nbsp;info
              </button>
              <label className="subtitulo">
                Título propio de la Universidad Europea Miguel de Cervantes.
              </label>
              <br></br>
              <p className="descripcion">
                <span>
                  <strong>Triple acreditación:</strong>
                </span>
                <br></br>
                <span className="desc-detalle">
                  Experto universitario - 30 ECTS (750 horas)
                </span>
                <br></br>
                <span className="desc-detalle">
                  Formación Continuada - 18,8 créditos CFC
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <FooterNavigation left={"/especialized-seven"} right={"/avanzado-dos"} />
  </Layout>
);

export default AvanzadoUno;
