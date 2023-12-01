import React from "react";
import Box from "../../Components/Box";

const detal = () => {
    return (<>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul>To jest dla Ciebie jeżeli:
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
            </ul>
    </>);
};

const Lips = () => {
    return(
        <>
        <Box 
            imgOnLeft={false} 
            h2={"Usta"} 
            h3={"Lorem ipsum"}
            imgSrc={"/images/portfolio/pic9.jpeg"}
            imgClass={"img-shadow"}
            imgTitle={"pic9"}
            imgAlt={"pic9"}
            children={detal}
        />
    </>)
};

export default Lips;
