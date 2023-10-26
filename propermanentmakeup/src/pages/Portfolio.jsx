import React from "react";

const Portfolio = () => {
    const pictures = [
        { src: "./images/portfolio/portfolio1.jpeg", alt: "", title: "" },
        { src: "./images/portfolio/portfolio2.jpeg", alt: "", title: "" },
        { src: "./images/portfolio/portfolio3.jpeg", alt: "", title: "" },
        { src: "./images/portfolio/portfolio4.jpeg", alt: "", title: "" },
        { src: "./images/portfolio/portfolio5.jpeg", alt: "", title: "" },
        { src: "./images/portfolio/portfolio6.jpeg", alt: "", title: "" },
        { src: "./images/portfolio/portfolio7.jpeg", alt: "", title: "" },
        { src: "./images/portfolio/portfolio8.jpeg", alt: "", title: "" },
        { src: "./images/portfolio/portfolio9.jpeg", alt: "", title: "" },
        { src: "./images/portfolio/portfolio10.jpeg", alt: "", title: "" },
        { src: "./images/portfolio/portfolio11.jpeg", alt: "", title: "" },
    ];

    return (
        <div className="row">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">Moje realizacje:</h2>

                <div className="row">
                    <div className="col-md-7">
                        { pictures.map(({ src, alt, title }, index) => <img src={src} alt={alt} title={title} key={index} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;