import React from "react";

const ContactForm = () => {
    return (
        <>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" id="formControlInput1" placeholder="podaj email"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Wiadomość</label>
            <textarea className="form-control" id="formControlTextarea1" rows="3"></textarea>
            </div>
            
        <div className='mb3'>
            <button className="btn btn-outline-secondary d-inline-flex align-items-center" type="button">Wyślij
                <svg className="bi ms-1" width="20" height="20"></svg>
            </button>
        </div>
        
        </>
    );
};

export default ContactForm;