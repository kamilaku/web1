import React from "react";

const Eyelids = () => {
    return(
        <>
        {/* text on the left */}
        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">Kreski</h2>
                <h3 className="text-body-secondary">Te pigmentację pokochała nawet Kleopatra.
                </h3>
                <p className="lead">To klasyczne, ponadczasowe podkreślenie oka.</p>
                <p className="lead">Masz opadająca powiekę?
                Delikatna rozcieniowana kreska sprawdzi się doskonale. Moja autorska technika "Kosmiczny Pyłek" dzięki swojej delikatności wygląda dobrze na każdym oku.
                </p>
            </div>
            <div className="col-md-5">
                <img src="/images/portfolio/portfolio7.jpeg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" title="Makijaż permanentny brwi" alt="Makijaż permanentny brwi" />
            </div>
        </div>
        </>)
};

export default Eyelids;
