import React from "react";
import Box from "../../Components/Box";

const detal = () => {
    return (<>
        <p className="lead">
            <ul>To jest dla Ciebie jeżeli:
                <li>Czerwień wargowa z wiekiem zanikła</li>
                <li>Naturalna czerwień wargowa jest jasna i usta „gubią się” w twarzy</li>
                <li>Masz blizny na ustach po opryszczkach</li>
                <li>Masz rozszczep wargi</li>
                <li>Masz asymetrię ust</li>
                <li>Kontur ust jest niewyraźny</li>
                <li>Lubisz podkreślać swoje usta</li>
            </ul>
        </p>
    </>);
};

const Lips = () => {
    return(
        <>
        <Box 
            imgOnLeft={false} 
            h2={"Usta"} 
            h3={"Symbol kobiecości"}
            p={"Ustami wyrażamy słowa, uczucia, emocje. Pełne, odpowiednio podkreślone, postrzegane są jako piękne i zmysłowe.  Makijaż permanentny podkreśla naturalne piękno, a w efekcie możemy cieszyć się naturalnie wyglądającym makijażem permanentnym, który nigdy się nie rozmazuje."}
            imgSrc={"/images/portfolio/portfolio2.jpeg"}
            imgClass={"imgInBoxes"}
            imgTitle={"Makijaż permanentny ust"}
            imgAlt={"Makijaż permanentny ust"}
            children={detal}
        />
    </>)
};

export default Lips;
