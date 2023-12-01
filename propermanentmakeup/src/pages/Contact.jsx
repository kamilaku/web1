import React from "react";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
    return (
        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">Skontaktuj się!</h2>
                <p className="lead">Zadzwoń, napisz, zapytaj – chętnie odpowiem na wszystkie pytania.</p>
                <p className="text-body-secondary">Telefon: <a href="tel:+48000000000" id="phoneNum">000000000</a></p>
                <p className="text-body-secondary">Adres: 58-500 Jelenia Góra</p>
            </div>

            <div className="col-md-5 img-dotted">
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;