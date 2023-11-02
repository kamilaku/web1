import React from "react";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
    return (
        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">Skontaktuj się!</h2>
                <p className="lead">Zadzwoń, napisz, zapytaj – chętnie odpowiem na wszystkie pytania. Makijaż permanentny nie ma przede mną tajemnic.</p>
                <p className="text-body-secondary">Telefon: <a href="tel:+48570756959" id="phoneNum">570756959</a></p>
                <p className="text-body-secondary">Adres: 58-500 Jelenia Góra</p>
            </div>

            <div className="col-md-5 img-dotted">
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;