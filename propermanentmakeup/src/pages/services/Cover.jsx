import React from "react";
import Box from "../../Components/Box";

const Cover = () => {
    return(
        <>
        <Box 
            imgOnLeft={false} 
            h2={"Cover"} 
            h3={"strona w budowie"}
            p={""}
            imgSrc={"/images/portfolio/portfolio2.jpeg"}
            imgClass={"imgInBoxes"}
            imgTitle={"Cover"}
            imgAlt={"Cover"}
        />
    </>)
};

export default Cover;
