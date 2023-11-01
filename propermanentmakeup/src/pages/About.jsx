import React from "react";
import Box from "../Components/Box";

const detal = () => {
    return (<>
        <p className="lead">Nagrodzona dyplomem MASTER CLASSName, trener makijażu permanentnego. Właścicielka centrum makijaż permanentnego Akademia Piękna M.Deja w Jeleniej Górze. Założycielka akcji charytatywnej "OD SERCA" w której z darmowych zabiegów makijażu permanentnego AREOLI mogą skorzystać kobiety dotknięte nowotworem piersi. Artystyczna dusza, malarka obrazów ściennych, komiksów, kochająca sztukę w każdej postaci.</p>
        <h5 className="text-body-secondary">"Zadzwoń, napisz, zapytaj - chętnie odpowiem na wszystkie pytania, makijaż permanentny nie ma przede mną tajemnic."</h5>
    </>);
};


const About = () => {
    return (
        <>
            <div className="row featurette">
                <Box 
                    imgOnLeft={false} 
                    h2={"Magdalena Deja"} 
                    h3={"Linergistka z wieloletnim doświadczeniem"}
                    p={""}
                    imgSrc={"./images/aboutMe.jpeg"}
                    imgClass={""}
                    imgTitle={"Magdalena Deja"}
                    imgAlt={"Magdalena Deja"}
                    children={detal}
                />

                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1 pt-4">Jak wygląda moja praca?</h2>

                    <div className="col-md-7 d-flex flex-wrap">
                        <img src="./images/myWork/mojapraca1.jpeg" className="img-thumbnail object-fit-cover" alt="1234"></img>
                        <img src="./images/myWork/mojapraca2.jpeg" className="img-thumbnail object-fit-cover" alt="1234"></img>
                        <img src="./images/myWork/mojapraca3.jpeg" className="img-thumbnail object-fit-cover" alt="1234"></img>
                        <img src="./images/myWork/mojapraca4.jpeg" className="img-thumbnail object-fit-cover" alt="1234"></img>
                        <img src="./images/myWork/mojapraca5.jpeg" className="img-thumbnail object-fit-cover" alt="1234"></img>
                        <img src="./images/myWork/mojapraca6.jpeg" className="img-thumbnail object-fit-cover" alt="1234"></img>
                        <img src="./images/myWork/mojapraca7.jpeg" className="img-thumbnail object-fit-cover" alt="1234"></img>
                        <img src="./images/myWork/mojapraca8.jpeg" className="img-thumbnail object-fit-cover" alt="1234"></img>
                        <img src="./images/myWork/mojapraca9.jpeg" className="img-thumbnail object-fit-cover" alt="1234"></img>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;
