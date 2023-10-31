import React from "react";

const About = () => {
    return (
        <>
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">Magdalena Deja</h2>

                    <p className="lead">Linergistka z wieloletnim doświadczeniem, nagrodzona dyplomem MASTER CLASSName, trener makijażu permanentnego. Właścicielka centrum makijaż permanentnego Akademia Piękna M.Deja w Jeleniej Górze. Założycielka akcji charytatywnej "OD SERCA" w której z darmowych zabiegów makijażu permanentnego AREOLI mogą skorzystać kobiety dotknięte nowotworem piersi. Artystyczna dusza, malarka obrazów ściennych, komiksów, kochająca sztukę w każdej postaci.</p>
                    <h5>Zadzwoń, napisz, zapytaj - chętnie odpowiem na wszystkie pytania, makijaż permanentny nie ma przede mną tajemnic.</h5>
                </div>

                <div className="col-md-5">
                    <img src="./images/aboutMe.jpeg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" title="Artystka" alt="Makijaż permanentny" />
                </div>

                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">Jak wygląda moja praca?</h2>

                    <div className="col-md-7 d-flex flex-wrap">
                        <img src="./images/myWork/mojapraca1.jpeg" className="img-thumbnail object-fit-cover"></img>
                        <img src="./images/myWork/mojapraca2.jpeg" className="img-thumbnail object-fit-cover"></img>
                        <img src="./images/myWork/mojapraca3.jpeg" className="img-thumbnail object-fit-cover"></img>
                        <img src="./images/myWork/mojapraca4.jpeg" className="img-thumbnail object-fit-cover"></img>
                        <img src="./images/myWork/mojapraca5.jpeg" className="img-thumbnail object-fit-cover"></img>
                        <img src="./images/myWork/mojapraca6.jpeg" className="img-thumbnail object-fit-cover"></img>
                        <img src="./images/myWork/mojapraca7.jpeg" className="img-thumbnail object-fit-cover"></img>
                        <img src="./images/myWork/mojapraca8.jpeg" className="img-thumbnail object-fit-cover"></img>
                        <img src="./images/myWork/mojapraca9.jpeg" className="img-thumbnail object-fit-cover"></img>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;
