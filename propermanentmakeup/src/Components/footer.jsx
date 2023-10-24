import React from 'react';

function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
                </div>

                <div className="logo">
                    <img src="/images/Deja_znak_wodny_zloty-logo.png" alt="logo" title="logo" width='15%' height='15%'/>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;