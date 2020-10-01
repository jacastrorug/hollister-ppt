import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Img01 from "../images/levels/img01.png";
import Img02 from "../images/levels/img02.png";
import Img03 from "../images/levels/img03.png";
import Img04 from "../images/levels/img04.png";
import Header from "../images/levels/header.png";
import FooterNavigation from "../components/FooterNavigation";

const Levels = (props) => (
  <Layout>
    <Helmet>
      <title>Colaboradores / Avales</title>
      <meta name="description" content="Elements Page" />
    </Helmet>
    <div id="main" className="basic-level">
      <div className='row content-header'>
        <div className='col-12 col-12-medium container-header'>
          <img src={Header}/>
          <div className='contetnt-title-levels'>
            <span>Niveles</span>
            <span>de formación</span>
          </div>
        </div>
        <div className='col-12 col-12-medium container-header'>
          <div className='wrapper-levels'>
            <div>
              <img src={Img01}/>
            </div>
            <div>
              <img src={Img02}/>
            </div>
            <div>
              <img src={Img03}/>
            </div>
            <div>
              <img src={Img04}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterNavigation left={"/collaborators"} right={"/basic-facetoface"} />
  </Layout>
);

export default Levels;
