import React from "react";

const SmallBoxes = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
                <img src='/images/kreski.jpeg' className="bd-placeholder-img rounded-circle" width="140" height="140" />
                <h2 className="fw-normal">Kreski</h2>
                <p>Tę pigmentację pokochała nawet Kleopatra. To klasyczne, ponadczasowe podkreślenie oka.</p>
                <p><a className="btn btn-secondary" href="#">Pokaż »</a></p>
            </div>
            <div className="col-lg-4">
                <img src='/images/usta.jpeg' className="bd-placeholder-img rounded-circle" width="140" height="140" />
                <h2 className="fw-normal">Usta</h2>
                <p>Ustami wyrażamy słowa, uczucia, emocje. Pełne, odpowiednio podkreślone, postrzegane są jako piękne i zmysłowe.</p>
                <p><a className="btn btn-secondary" href="#">Pokaż »</a></p>
            </div>
            <div className="col-lg-4">
                <img src='/images/brwi.jpeg' className="bd-placeholder-img rounded-circle" width="140" height="140" />
                <h2 className="fw-normal">Brwi</h2>
                <p>Brwi to najbardziej wyróżniający się element twarzy. Mówi się, że oczy są zwierciadłem duszy, w takim razie brwi są ramą zwierciadła.</p>
                <p><a className="btn btn-secondary" href="#">Pokaż »</a></p>
            </div>
        </div>
    );
}

export default SmallBoxes;