import React from "react";

const Box = ({imgOnLeft, h2, h3, p, children, imgSrc, imgClass, imgTitle, imgAlt}) => {
    return (<>
        <div className="row featurette">
            <div className={`col ${imgOnLeft ? 'order-md-2': ''}`}>
                <h2 className="featurette-heading fw-normal lh-1">{h2}</h2>
                <h3 className="text-body-secondary">{h3}</h3>
                
                {p ? <p className="lead">{p}</p> : null}
                {children ? children() : null}
            </div>

            <div className="col">
                <img src={imgSrc} className={`bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded ${imgClass ? imgClass : ''}`}  title={imgTitle} alt={imgAlt} />
            </div>
        </div>
    </>);
};

export default Box;