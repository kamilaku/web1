import React from "react";
import ImageGallery from "react-image-gallery";

const Portfolio = () => {
    const pictures = [
        { original: "/images/portfolio/portfolio1.jpeg", thumbnail: "/images/portfolio/portfolio1.jpeg", originalAlt: "Brwi - przed i po", originalTitle: "Brwi - przed i po" },
        { original: "/images/portfolio/portfolio2.jpeg", thumbnail: "/images/portfolio/portfolio2.jpeg", originalAlt: "Usta - przed i po", originalTitle: "Usta - przed i po" },
        { original: "./images/portfolio/portfolio3.jpeg", thumbnail: "./images/portfolio/portfolio3.jpeg", originalAlt: "W trakcie pracy", originalTitle: "W trakcie pracy" },
        { original: "./images/portfolio/portfolio4.jpeg", thumbnail: "./images/portfolio/portfolio4.jpeg", originalAlt: "Brwi - przed i po", originalTitle: "Brwi - przed i po" },
        { original: "./images/portfolio/portfolio5.jpeg", thumbnail: "./images/portfolio/portfolio5.jpeg", originalAlt: "Usta - przed i po", originalTitle: "Usta - przed i po" },
        { original: "./images/portfolio/portfolio6.jpeg", thumbnail: "./images/portfolio/portfolio6.jpeg", originalAlt: "Usta permanentne - przed i po", originalTitle: "Usta permanentne - przed i po" },
        { original: "./images/portfolio/portfolio7.jpeg", thumbnail: "./images/portfolio/portfolio7.jpeg", originalAlt: "Brwi", originalTitle: "Brwi" },
        { original: "./images/portfolio/portfolio8.jpeg", thumbnail: "./images/portfolio/portfolio8.jpeg", originalAlt: "Brwi permanentne - przed i po", originalTitle: "Brwi permanentne - przed i po" },
        { original: "./images/portfolio/portfolio9.jpeg", thumbnail: "./images/portfolio/portfolio9.jpeg", originalAlt: "Usuwanie makijau permanentnego", originalTitle: "Usuwanie makijau permanentnego" },
        { original: "./images/portfolio/portfolio11.jpeg", thumbnail: "./images/portfolio/portfolio11.jpeg", originalAlt: "Brwi permanentne", originalTitle: "Brwi permanentne" },
    ];

    return (
        <div className="row">
            <div className="col d-flex flex-wrap">
                <h2 className="featurette-heading fw-normal lh-1">Moje realizacje:</h2>
                <div className="row">
                    <ImageGallery items={pictures} showBullets={true} lazyLoad={true} className="h-50 w-auto d-inline-block"/>;
                </div>
            </div>
        </div>
    );
};

export default Portfolio;