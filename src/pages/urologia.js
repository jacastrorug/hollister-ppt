import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import FooterNavigation from "../components/FooterNavigation";

const Urologia = (props) => (
  <Layout>
    <Helmet>
      <title>Foros de Urología en Salud Digital</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div>
      <section id="banner-urologia">
        <div className="columnas-una">
          <div className="columnas-dos">
            <h1 className="tit">
              Foros de Urología <br></br>en Salud Digital
            </h1>
          </div>
        </div>
        <h1 className="sub">Hollister Education con la Salud Digital</h1>
      </section>
    </div>

    <FooterNavigation
      left={"/avanzado-dos"}
      right={"/profesionales-sanitarios"}
    />
  </Layout>
);

export default Urologia;
