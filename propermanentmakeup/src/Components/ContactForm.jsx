import React from "react";

const ContactForm = () => {
    return (<>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" id="formControlInput1" placeholder="podaj email"/>
        </div>

        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea" className="form-label">Wiadomość</label>
            <textarea className="form-control" id="formControlTextarea" rows="4"></textarea>
            </div>
            
        <div className='mb3'>
            <button className="btn btn-outline-secondary text-center w-100" type="button">Wyślij »</button>
        </div>
        
    </>);
};

export default ContactForm;