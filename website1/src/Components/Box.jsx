import React from "react";

const Box = ({imgOnLeft, h2, h3, p, children, imgSrc, imgClass, imgTitle, imgAlt}) => {
    return (<>
        <div className="row featurette">
            <div className={`col-xs-12 col-sm-6 col-md-7 col-lg-8 ${imgOnLeft ? 'order-md-2': ''}`}>
                <h2 className="featurette-heading fw-normal lh-1">{h2}</h2>
                <h3 className="text-body-secondary">{h3}</h3>
                
                {p ? <p className="lead">{p}</p> : null}
                {children ? children() : null}
            </div>

            <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4">
                <img src={imgSrc} className={`bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded ${imgClass ? imgClass : ''}`}  title={imgTitle} alt={imgAlt} />
            </div>
        </div>
    </>);
};

export default Box;