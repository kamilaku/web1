import React from "react";

const BigBoxes = () => {
    return (<>
        {/* text on the left */}
        <hr className="featurette-divider"></hr>

        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">Akademia Piękna Magdalena Deja </h2>
                <h3 className="text-body-secondary">Centrum makijażu permanentnego w Jeleniej Górze</h3>
                <p className="lead">Makijaż permanentny, nazywany również makijażem trwałym to innowacyjna procedura kosmetyczna. Zabieg makijażu permanentnego polega na wprowadzeniu do górnej warstwy skóry przeznaczonego do tego pigmentu (hipoalergicznego). Umożliwia to malowanie cienkich lini, pozwala zamaskować blizny, niedoskonałości, ubytki, wyrównać kolor. Makijaż permanentny to zabieg luksusowy, na wysokiej jakości preparatach. Nie oszczędzamy na twarzy i na zdrowiu 🙂 Natomiast po zabiegu zaoszczędzimy CZAS na wykonanie makijażu rano, pieniądze na zbędne kosmetyki, miejsce w torebce i spokój bo makijaż permanentny nie rozmazuje się nawet w ekstremalnych sytuacjach, a zatem wzmacnia poczucie pewności siebie. Jest to zabieg, który pokochały miliony kobiet. Ja jestem jedną z nich 🖤 
                <br/>Zadzwoń, napisz, zapytaj - chętnie odpowiem na wszystkie pytania, makijaż permanentny nie ma przede mną tajemnic.</p>
            </div>

            <div className="col-md-5">
                <img src="./images/image1.jpeg" ClassName="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" id="bbr" title="Makijaż permanentny" alt="Makijaż permanentny" />

            </div>
        </div>

        {/* text on the right */}
        <hr className="featurette-divider"></hr>

        <div className="row featurette">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">Magdalena Deja </h2>
                <h3 className="text-body-secondary">Linergistka z wieloletnim doświadczeniem</h3>

                <p className="lead">Nagrodzona dyplomem MASTER CLASSName, trener makijażu permanentnego. Właścicielka Centrum Makijażu Permanentnego Akademia Piękna M.Deja w Jeleniej Górze. Założycielka akcji charytatywnej "OD SERCA", w której z darmowych zabiegów makijażu permanentnego AREOLI mogą skorzystać kobiety dotknięte nowotworem piersi. Artystyczna dusza, malarka obrazów ściennych, komiksów, kochająca sztukę w każdej postaci.</p>
            </div>
    
            <div className="col-md-5 order-md-1">
                <img src="./images/image2.jpeg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" id="bbl" title="Magdalena Deja" alt="Magdalena Deja" />
            </div>
        </div>

        <hr className="featurette-divider"></hr>
    </>);
}

export default BigBoxes;