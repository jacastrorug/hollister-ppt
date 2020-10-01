import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Img01 from "../images/collaborators/logo-ASD.png";
import Img02 from "../images/collaborators/Logo-huci.png";
import Img03 from "../images/collaborators/Logo-Salusplay.png";
import FooterNavigation from "../components/FooterNavigation";

const Collaborators = (props) => (
  <Layout>
    <Helmet>
      <title>Colaboradores / Avales</title>
      <meta name="description" content="Elements Page" />
    </Helmet>
    <div id="main" className="basic-level">
      <div className="col-12 ol-12-medium">
        <div className="title-container-collaborators">
          Colaboradores / Avales
        </div>
        <div className="line-top-collaborators"></div>
        <div className="line-left-collaborators"></div>
        <div className="container-collaborators">
          <div className="container-collaborator">
            <div className="img-collaborators">
              <div className="container-collaborator-list">
                <span>Avalado por</span>
                <img src={Img01} width="100" />
              </div>
              <div className="container-collaborator-list">
                <span>Colaborador en proyectos de humanización</span>
                <img src={Img02} width="200" />
              </div>
              <div className="container-collaborator-list">
                <span>Colaborador en niveles básico y avanzado</span>
                <img src={Img03} width="200" />
              </div>
            </div>
            <div className="line-decorator-collaborators"></div>
          </div>
        </div>
      </div>
    </div>
    <FooterNavigation left={"/sabias-que"} right={"/levels"} />
  </Layout>
);

export default Collaborators;
