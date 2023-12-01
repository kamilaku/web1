import React from "react";
import ImageGallery from "react-image-gallery";

const Portfolio = () => {
    const pictures = [
        { original: "/images/portfolio/pic6.jpeg", thumbnail: "/images/portfolio/pic6.jpeg", originalAlt: "pic6", originalTitle: "pic6" },
        { original: "/images/portfolio/pic7.jpeg", thumbnail: "/images/portfolio/pic7.jpeg", originalAlt: "pic", originalTitle: "pic" },
        { original: "./images/portfolio/pic8.jpeg", thumbnail: "./images/portfolio/pic8.jpeg", originalAlt: "pic", originalTitle: "pic" },
        { original: "./images/portfolio/pic8.jpeg", thumbnail: "./images/portfolio/pic9.jpeg", originalAlt: "pic", originalTitle: "pic" },
        { original: "./images/portfolio/pic10.jpeg", thumbnail: "./images/portfolio/pic10.jpeg", originalAlt: "pic", originalTitle: "pic" },
        { original: "/images/portfolio/pic6.jpeg", thumbnail: "/images/portfolio/pic6.jpeg", originalAlt: "pic6", originalTitle: "pic6" },
        { original: "/images/portfolio/pic7.jpeg", thumbnail: "/images/portfolio/pic7.jpeg", originalAlt: "pic", originalTitle: "pic" },
        { original: "./images/portfolio/pic8.jpeg", thumbnail: "./images/portfolio/pic8.jpeg", originalAlt: "pic", originalTitle: "pic" },
        { original: "./images/portfolio/pic8.jpeg", thumbnail: "./images/portfolio/pic9.jpeg", originalAlt: "pic", originalTitle: "pic" },
        { original: "./images/portfolio/pic10.jpeg", thumbnail: "./images/portfolio/pic10.jpeg", originalAlt: "pic", originalTitle: "pic" },
        
    ];

    return (
        <div className="row">
            <div className="col d-flex flex-wrap">
                <h2 className="featurette-heading fw-normal lh-1">Moje realizacje:</h2>
                <div className="row w-100 h-auto">
                    <ImageGallery items={pictures} showBullets={true} lazyLoad={true} className="h-50 w-auto d-inline-block"/>;
                </div>
            </div>
        </div>
    );
};

export default Portfolio;