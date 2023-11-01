import React from "react";
import { Link } from "react-router-dom";

const SmallBoxes = () => {
    return (
        <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-4 d-flex flex-column">
                <Link to="/services/eyelids" className="nav-link  d-flex justify-content-center px-2 link-secondary" ><img src='/images/kreski.jpeg' className="bd-placeholder-img rounded object-fit-cover img-dotted" width="140" height="140" /></Link>

                <h2 className="fw-normal d-flex justify-content-center pt-4">Kreski</h2>
                <p>Tę pigmentację pokochała nawet Kleopatra. To klasyczne, ponadczasowe podkreślenie oka.</p>
                <p className="mt-auto"><a className="btn btn-outline-secondary d-flex justify-content-center" href="/services/eyelids">Pokaż »</a></p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 d-flex flex-column">
                <Link to="/services/lips" className="nav-link  d-flex justify-content-center px-2 link-secondary" ><img src='/images/usta.jpeg' className="bd-placeholder-img rounded object-fit-cover img-dotted" width="140" height="140" /></Link>
                <h2 className="fw-normal d-flex justify-content-center pt-4">Usta</h2>
                <p>Ustami wyrażamy słowa, uczucia, emocje. Pełne, odpowiednio podkreślone, postrzegane są jako piękne i zmysłowe.</p>
                <p className="mt-auto"><a className="btn btn-outline-secondary d-flex justify-content-center" href="/services/lips">Pokaż »</a></p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 d-flex flex-column">
                <Link to="/services/brows" className="nav-link  d-flex justify-content-center px-2 link-secondary" ><img src='/images/brwi.jpeg' className="bd-placeholder-img rounded object-fit-cover img-dotted" width="140" height="140" /></Link>

                <h2 className="fw-normal d-flex justify-content-center pt-4">Brwi</h2>
                <p>Brwi to najbardziej wyróżniający się element twarzy. Mówi się, że oczy są zwierciadłem duszy, w takim razie brwi są ramą zwierciadła.</p>
                <p className="mt-auto"><a className="btn btn-outline-secondary d-flex justify-content-center" href="/services/brows">Pokaż »</a></p>
            </div>
        </div>
    );
};

export default SmallBoxes;