import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import ImagenEncabezado from "../assets/images/18/nombre.png";
import Hollister from "../assets/images/27/logo-hollister-blanco.png";
import FooterNavigation from "../components/FooterNavigation";

const AvanzadoDos = (props) => (
  <Layout>
    <Helmet>
      <title>Avanzado Dos</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div>
      <section id="banner-navanzadodos">
        <img src={ImagenEncabezado} alt="intro" className="icono-nivel" />
        <br></br>
        <img src={Hollister} alt="intro" className="icono-nivel-dos" />
        <br></br>
        <br></br>
        <div className="container-especialized margen-cuadro-texto">
          <div className="col-8 col-12-medium">
            <div className="avanzado-line">
              {" "}
              <span>Master en Salud Digital</span>
            </div>
          </div>
        </div>
        <div className="container-especialized margen-cuadro-texto">
          <div className="con-borde"></div>
          <div className="sin-borde"></div>
        </div>
        <div className="border-title-especilized btn-line">
          <button className="btn-info">
            <i className="fa fa-plus"></i>&nbsp;info
          </button>
        </div>
        <div className="columnas-dos margen-col">
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
              Experto universitario - 60 ECTS (1500 horas)
            </span>
            <br></br>
            <span className="desc-detalle">
              Formación Continuada - 36,6 créditos CFC
            </span>
            <br></br>
          </p>
        </div>
      </section>
    </div>

    <FooterNavigation left={"/avanzado-uno"} right={"/urologia"} />
  </Layout>
);

export default AvanzadoDos;
