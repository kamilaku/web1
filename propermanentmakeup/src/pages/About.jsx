import React from "react";
import Box from "../Components/Box";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const detal = () => {
    return (<>
        <p className="lead">Nagrodzona dyplomem MASTER CLASSName, trener makijażu permanentnego. Właścicielka centrum makijaż permanentnego Akademia Piękna M.Deja w Jeleniej Górze. Założycielka akcji charytatywnej "OD SERCA" w której z darmowych zabiegów makijażu permanentnego AREOLI mogą skorzystać kobiety dotknięte nowotworem piersi. Artystyczna dusza, malarka obrazów ściennych, komiksów, kochająca sztukę w każdej postaci.</p>
        <h5 className="text-body-secondary">"Zadzwoń, napisz, zapytaj - chętnie odpowiem na wszystkie pytania, makijaż permanentny nie ma przede mną tajemnic."</h5>
    </>);
};

const images = [
    "./images/myWork/mojapraca1.jpeg",
    "./images/myWork/mojapraca2.jpeg",
    "./images/myWork/mojapraca3.jpeg",
    "./images/myWork/mojapraca4.jpeg",
    "./images/myWork/mojapraca5.jpeg",
    "./images/myWork/mojapraca6.jpeg",
    "./images/myWork/mojapraca7.jpeg",
    "./images/myWork/mojapraca8.jpeg",
    "./images/myWork/mojapraca9.jpeg"
];


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

                <div className="col">
                    <h1 className="featurette-heading fw-normal lh-1 my-5 text-center">Jak wygląda moja praca?</h1>

                    <div className="col">
                        <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 700: 2, 1000: 3}}>
                            <Masonry columnsCount={3} gutter="20px">
                                {images.map((image, i) => (
                                    <img
                                        key={i}
                                        src={image}
                                        style={{width: "100%", display: "block"}}
                                        alt=""
                                    />
                                ))};
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;
