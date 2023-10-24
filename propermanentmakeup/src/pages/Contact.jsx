import React from "react";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
    return (
        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">Skontaktuj się! 
                <br></br><span class="text-body-secondary">Zadzwoń, napisz, zapytaj – chętnie odpowiem na wszystkie pytania. Makijaż permanentny nie ma przede mną tajemnic.</span></h2>
                <p class="lead">Telefon: 570756959<br/>
                Adres: 58-500 Jelenia Góra</p>
            </div>
            <div class="col-md-5">
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;