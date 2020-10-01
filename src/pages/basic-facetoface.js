import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import SecctionImg from "../images/basic/nombre.png";
import IconImg from "../images/basic/ico_aforo.png";
import Img09 from "../images/basic/fotografia.png";
import FooterNavigation from "../components/FooterNavigation";

const BasicFaceToFace = (props) => (
  <Layout>
    <Helmet>
      <title>Basic Face To Face</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="basic-level">
      <div className="row">
        <div className="backfgraund-withe col-8 col-12-medium">
          <div className="main-basic">
            <img src={SecctionImg} />
          </div>
          <div className="online-becas">
            <span>Presencial</span>
            <div className="square-facetoface"></div>
          </div>
          <div className="border-title-bottom"></div>

          <div className="container-basic-presencial">
            <div className="description-container">
              <span>
                Capacitación en desafíos de la digitalización aplicada a la
                salud como es:
              </span>
              la consulta en remoto, el liderazgo en comunidades de
              pacientes...etc
            </div>
            <div className="description-container">
              <span>Impartido por:</span>
              Expertos en la temática establecida anualmente
            </div>
            <div className="containewr-aforo">
              <div>
                <img src={IconImg} />
              </div>
              <div className="aforo-description">
                <div className="count-aforo">
                  <span>Aforo máximo:</span>
                  20 pax.
                </div>
                <div className="note-afoto">
                  *(se establecerá un programa online o presencial")
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 col-12-medium container-img-basic">
          <img src={Img09} />
        </div>
      </div>
    </div>
    <FooterNavigation left={"/levels"} right={"/basic-scholarships"} />
  </Layout>
);

export default BasicFaceToFace;
