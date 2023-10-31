import React from "react";

const Lips = () => {
    return(
        <>
        {/* text on the left */}
        <hr className="featurette-divider"></hr>
        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">Usta</h2>
                <h3 className="text-body-secondary">Symbol kobiecości</h3>
                <p className="lead">Ustami wyrażamy słowa, uczucia, emocje.</p>
                <p className="lead">Pełne, odpowiednio podkreślone, postrzegane są jako piękne i zmysłowe.  Makijaż permanentny podkreśla naturalne piękno, a w efekcie możemy cieszyć się naturalnie wyglądającym makijażem permanentnym, który nigdy się nie rozmazuje.</p>
                
                <p className="lead">To jest dla Ciebie jeżeli:
                    <ul>
                        <li>Czerwień wargowa z wiekiem zanikła</li>
                        <li>Naturalna czerwień wargowa jest jasna i usta „gubią się” w twarzy</li>
                        <li>Masz blizny na ustach po opryszczkach</li>
                        <li>Masz rozszczep wargi</li>
                        <li>Masz asymetrię ust</li>
                        <li>Kontur ust jest niewyraźny</li>
                        <li>Lubisz podkreślać swoje usta</li>
                    </ul>
                </p>
            </div>
            <div className="col-md-5">
                <img src="/images/portfolio/portfolio2.jpeg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" title="Makijaż permanentny brwi" alt="Makijaż permanentny brwi" />

            </div>
        </div>
        <hr className="featurette-divider"></hr>
        </>)
};

export default Lips;
