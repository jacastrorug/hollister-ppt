import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import "../assets/scss/03.scss";
import FooterNavigation from "../components/FooterNavigation";
import leftImage from "../assets/images/03/DP04_foto.jpg";
import icon01 from "../assets/images/03/ico_01.png";
import icon02 from "../assets/images/03/ico_02.png";
import iconPlus from "../assets/images/03/ico+.png";

const SabiasQue = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>Sabias que</title>
        <meta
          name="description"
          content="Sabias que el 94% de los profesionales utiliza el ordenador en su trabajo"
        />
      </Helmet>
      <div id="main" className="basic-level">
        <div className="row">
          <div className="col-12 col-12-medium">
            <div className="main-basic">
              <div className="number-page"></div>
              <div className="title-basic"></div>
            </div>
            <div className="container-especialized">
              <div className="row">
                <div className="col-4 col-12-medium">
                  <img
                    className="img-section-especialized-objetives"
                    src={leftImage}
                  />
                </div>
                <div className="col-8 col-12-medium">
                  <div className="col-12">
                    <div className="container-grid-especialized especialized">
                      <h3 className="title-grid title-section">
                        Sabías que...
                      </h3>
                    </div>
                  </div>
                  <div className="col-12 especialized-container">
                    <div className="col-12 container-especialized">
                      <div className="row">
                        <div className="col-12 col-12-medium">
                          <div className="container-grid-especialized-three">
                            <div className="wrapper-especilized-four">
                              <div>
                                <img src={icon01} />
                                <h2 className="percent-section">94%</h2>
                                <span className="description-content">
                                  de los profesionales utiliza el ordenador en
                                  su trabajo
                                </span>
                              </div>
                              <div>
                                <span className="middle-description">
                                  pero solo
                                </span>
                              </div>
                              <div>
                                <img src={icon02} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNavigation left={"/dos"} right={"/collaborators"} />
    </Layout>
  );
};

export default SabiasQue;
