import React from "react";
import Box from "../../Components/Box";

const detal = () => {
    return (<>
        <p className="lead">Mówi się, że oczy są zwierciadłem duszy, w takim razie brwi są ramą zwierciadła 🪞</p>
            <ul>
                <li>nadają charakter</li>
                <li>podkreślają oczy</li>
                <li>akcentują ekspresję</li>
                <li>mają decydujące znaczenie w wyznaczaniu symetrii twarzy</li>
            </ul>
        <h5 className="text-body-secondary">"Detal ma znaczenie"</h5>
    </>);
};

const Brows = () => {
    return(
        <>
        <Box 
            imgOnLeft={false} 
            h2={"Brwi"} 
            h3={"Najbardziej wyróżniający się element twarzy"}
            p={""}
            imgSrc={"/images/portfolio/portfolio8.jpeg"}
            imgClass={""}
            imgTitle={"Makijaż permanentny brwi"}
            imgAlt={"Makijaż permanentny brwi"}
            children={detal}
        />
    </>)
};

export default Brows;
