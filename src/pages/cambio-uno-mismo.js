import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import "../assets/scss/stylebasiclevel.scss";
import "../assets/scss/03.scss";
import FooterNavigation from "../components/FooterNavigation";
import video from "../assets/videos/03/teaser.mp4";
import comilla_abre from "../assets/images/03/comilla-abriendo.png";
import comilla_cierra from "../assets/images/03/comilla-cerrando.png";
import video_button from "../assets/images/03/ico_ver-video.png";



const CambioUnoMismo = (props) => {

    const videoRef = React.createRef();

    const [hideVideo, setHideVideo] = useState(true);

    const handleClick = () => {
        setHideVideo(false);
        console.log(videoRef);
    }
    const handleOuterClick = () => {
        setHideVideo(true);
        console.log(videoRef);
    }
    return (
        <Layout>
            <Helmet>
                <title>Todo cambio empieza en UNO MISMO</title>
                <meta name="description" content="Elements Page" />
            </Helmet>

            <div>
                <video hidden={hideVideo} ref={videoRef} controls className="video-container">
                    <source src={video} type="video/mp4" />
                </video>
                <section id="banner-cambio-uno-mismo">
                    <div className="container-uno-mismo">
                        <div className="title">
                            <span className="first">Todo cambio empieza en</span>
                            <br></br><span>UNO MISMO</span>
                        </div>
                        <div>
                            <p className="parrafo">
                                <span>"</span>
                            Ante una realidad social y tecnológica tan
                            cambiante como la actual, <strong>los profesionales
                                sanitarios tenemos la responsabilidad
                            ineludible de capacitarnos digitalmente</strong> para
                            mejorar nuestro desempeño profesional y así
                            ofrecer una atención sanitaria cada vez mejor y
                            adaptada al nuevo paradigma digital
                            <span>"</span>
                            </p>

                        </div>
                        <div className="ver-video">
                            <img src={video_button} alt="Reproducir video" onClick={handleClick} />
                            <div className="title-video">
                                Ver video
                        </div>
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
}

export default CambioUnoMismo;