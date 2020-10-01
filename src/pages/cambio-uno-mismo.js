import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import "../assets/scss/03.scss";
import FooterNavigation from "../components/FooterNavigation";
import comilla_abre from "../assets/images/03/comilla-abriendo.png";
import comilla_cierra from "../assets/images/03/comilla-cerrando.png";
import video_button from "../assets/images/03/ico_ver-video.png";



const TrabajoColaborativo = (props) => (
    <Layout>
        <Helmet>
            <title>Todo cambio empieza en UNO MISMO</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div>
            <section id="banner-cambio-uno-mismo">

                <div className="container-uno-mismo">
                    <div className="title">
                        <span className="first">Todo cambio empieza en</span>
                        <br></br><span>UNO MISMO</span>
                    </div>
                    <div>
                        <p className="parrafo">
                            Ante una realidad social y tecnológica tan
                            cambiante como la actual, los profesionales
                            sanitarios tenemos la responsabilidad
                            ineludible de capacitarnos digitalmente para
                            mejorar nuestro desempeño profesional y así
                            ofrecer una atención sanitaria cada vez mejor y
                            adaptada al nuevo paradigma digital
                    </p>

                    </div>
                    <div className="ver-video">
                        <img src={video_button} alt="Reproducir video" />
                        Ver video
                </div>

                </div>
            </section>
        </div>

        <FooterNavigation
            left={"/dos"}
            right={"/sabias-que"}
        />
    </Layout>
);

export default TrabajoColaborativo;