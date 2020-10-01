import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import Ilustration from "../images/especialized-one/ilustracion.png";
import Cuadro1 from "../images/especialized-one/ico_01.png";
import Cuadro2 from "../images/especialized-one/ico_02.png";
import Cuadro3 from "../images/especialized-one/ico_03.png";
import SecctionImg from "../images/especialized-one/nombre_02.png";
import FooterNavigation from "../components/FooterNavigation";

const EspecializedTwo = (props) => (
  <Layout>
    <Helmet>
      <title>Basic Face To Face</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="basic-level">
      <div className="col-12 col-12-medium">
        <div className="main-basic">
          <img src={SecctionImg} />
        </div>
        <div className="container-especialized row">
          <div className="col-8">
            <div className="especialized">
              <span>
                Principales motivos para desarrollar tu formación en
                Competencias Digitales
              </span>
            </div>
          </div>
          <div className="col-4 col-12-medium col-img">
            <img src={Ilustration} />
          </div>
        </div>
        <div className="row">
          <div className="container-imgs-especialized-02 col-12 containers-cards">
            <div>
              <img src={Cuadro1} />
              <div>
                <span>01</span>
                <div>La eSalud mejora la calidad asistencial.</div>
              </div>
            </div>
            <div>
              <img src={Cuadro2} />
              <div>
                <span>02</span>
                <div>
                  En el actual contexto sanitario se han convertido en
                  imprescindibles.
                </div>
              </div>
            </div>
            <div>
              <img src={Cuadro3} />
              <div>
                <span>03</span>
                <div>
                  Estudios demuestran la necesidad de formación en estas
                  competencias.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNavigation
        left={"/especialized-one"}
        right={"/especialized-three"}
      />
    </div>
  </Layout>
);

export default EspecializedTwo;
