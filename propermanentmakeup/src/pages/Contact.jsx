import React from "react";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
    return (
        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">Skontaktuj się!</h2>
                <p className="text-body-secondary">Zadzwoń, napisz, zapytaj – chętnie odpowiem na wszystkie pytania. Makijaż permanentny nie ma przede mną tajemnic.</p>
                <p className="lead">Telefon: 570756959<br/>
                Adres: 58-500 Jelenia Góra</p>
            </div>

            <div className="col-md-5">
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;