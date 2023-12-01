import React from "react";
import Box from "../Components/Box";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const detal = () => {
    return (<>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h5 className="text-body-secondary">"Zadzwoń, napisz, zapytaj - chętnie odpowiem na wszystkie pytania"</h5>
    </>);
};

const images = [
    {
        src: "./images/myWork/pic1.jpeg",
        alt: "pic1",
        title: "pic1",
    },
    {
        src: "./images/myWork/pic2.jpeg",
        alt: "pic2",
        title: "pic2",
    },
    {
        src: "./images/myWork/pic3.jpeg",
        alt: "pic3",
        title: "pic3",
    },
    {
        src: "./images/myWork/pic4.jpeg",
        alt: "pic4",
        title: "pic4",
    },
    {
        src: "./images/myWork/pic5.jpeg",
        alt: "pic5",
        title: "pic5",
    },
    {
        src: "./images/myWork/pic6.jpeg",
        alt: "pic6",
        title: "pic6",
    },
    {
        src: "./images/myWork/pic7.jpeg",
        alt: "pic7",
        title: "pic7",
    },
    {
        src: "./images/myWork/pic8.jpeg",
        alt: "pic8",
        title: "pic8",
    },
    {
        src: "./images/myWork/pic9.jpeg",
        alt: "pic9",
        title: "pic9",
    },
];

const About = () => {
    return (
        <>
            <div className="row featurette">
                <Box 
                    imgOnLeft={false} 
                    h2={"Imię i nazwisko"} 
                    h3={"Lorem ipsum"}
                    p={""}
                    imgSrc={"./images/pic10.jpeg"}
                    imgClass={"img-double"}
                    imgTitle={"pic10"}
                    imgAlt={"pic10"}
                    children={detal}
                />

                <div className="col">
                    <h1 className="featurette-heading fw-normal lh-1 my-5 text-center">Jak wygląda moja praca?</h1>

                    <div className="col">
                        <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 700: 2, 1000: 3}}>
                            <Masonry columnsCount={3} gutter="20px">
                                {images.map(({ src, alt, title }, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        style={{width: "100%", display: "block"}}
                                        alt={alt}
                                        title={title}
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
