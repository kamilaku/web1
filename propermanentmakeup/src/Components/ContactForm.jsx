import React from "react";

const ContactForm = () => {
    return (
        <>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="formControlInput1" placeholder="podaj email"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Wiadomość</label>
            <textarea class="form-control" id="formControlTextarea1" rows="3"></textarea>
            </div>
            
        <div class='mb3'>
            <button class="btn btn-outline-secondary d-inline-flex align-items-center" type="button">Wyślij
                <svg class="bi ms-1" width="20" height="20"></svg>
            </button>
        </div>
        
        </>
    );
};

export default ContactForm;