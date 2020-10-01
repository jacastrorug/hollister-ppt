import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import FooterNavigation from "../components/FooterNavigation";
import "../assets/scss/stylebasiclevel.scss";
import "../assets/scss/05.scss";

const PorqueHollister = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>Por que Hollister</title>
        <meta
          name="description"
          content="Por que Hollister con la Salud Digital"
        />
      </Helmet>
      <div>
        <section id="banner-porque-hollister">
          <div className="porque-container">
            <div className="title">
              <h2 className="title-section">
                Por qué Hollister <br></br>con la Salud Digital
              </h2>
            </div>
            <div className="list">
              <ul>
                <li>
                  <h3 className="description">
                    <strong>Nuestra misión: </strong>hacer la vida del paciente más digna y
                    gratificante
                  </h3>
                </li>
                <li>
                  <h3 className="description">
                  <strong>Corresponsabilidad y firme compromiso</strong> de
                    acompañar a los profesionales sanitarios en este
                    proceso de transformación digital bajo el
                    paraguas de la humanización en los cuidados.
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <FooterNavigation left={"/"} right={"/"} />
    </Layout>
  );
};

export default PorqueHollister;
