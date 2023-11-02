import React from "react";
import Box from "../../Components/Box";

const Eyelids = () => {
    return(
        <>
        <Box 
            imgOnLeft={false} 
            h2={"Kreski"} 
            h3={"Tę pigmentację pokochała nawet Kleopatra."}
            p={"To klasyczne, ponadczasowe podkreślenie oka. Masz opadająca powiekę? Delikatna rozcieniowana kreska sprawdzi się doskonale. Moja autorska technika 'Kosmiczny Pyłek' dzięki swojej delikatności wygląda dobrze na każdym oku."}
            imgSrc={"/images/portfolio/portfolio7.jpeg"}
            imgClass={"img-shadow"}
            imgTitle={"Makijaż permanentny powiek"}
            imgAlt={"Makijaż permanentny powiek"}
        />
    </>)
};

export default Eyelids;
