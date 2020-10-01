import React from "react";
import logoPortada from "../assets/images/01/logo-blanco-portada.png";
import FooterNavigation from "./FooterNavigation";

import "../assets/scss/01.scss";

const BannerSaludDigital = () => {
  return (
    <>
      <section id="bannerSalud">
        <div className="container-banner">
          <div className="row">
            <div className="col-12">
              <img src={logoPortada} className="logo-banner animate__animated animate__fadeInDownBig"/>
            </div>
            <div className="col-12 margin-left-title">
              <h2 className="animate__animated animate__fadeInDownBig animate__delay-5s"><strong>Salud </strong>Digital</h2>
            </div>
          </div>
        </div>

        <FooterNavigation right={"/dos"} />
      </section>
    </>
  );
};

export default BannerSaludDigital;
