import React from "react";

const Brows = () => {
    return(
        <>
        {/* text on the left */}
        <hr className="featurette-divider"></hr>
        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">Brwi</h2>
                <h3 className="text-body-secondary">Najbardziej wyróżniający się element twarzy</h3>
                <p className="lead">Mówi się, że oczy są zwierciadłem duszy, w takim razie brwi są ramą zwierciadła 🪞 <br/>
                ▪️ nadają charakter<br/>
                ▪️ podkreślają oczy <br/>
                ▪️ akcentują ekspresję<br/>
                ▪️ mają decydujące znaczenie w wyznaczaniu symetrii twarzy</p>
                <h5 className="text-body-secondary">"Detal ma znaczenie"</h5>
            </div>
            <div className="col-md-5">
                <img src="/images/portfolio/portfolio8.jpeg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" title="Makijaż permanentny brwi" alt="Makijaż permanentny brwi" />

            </div>
        </div>
        <hr className="featurette-divider"></hr>
        </>)
};

export default Brows;
