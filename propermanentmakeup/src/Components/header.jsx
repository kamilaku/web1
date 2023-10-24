import React from 'react';
import { Link } from "react-router-dom";


function Header() {
    return (
    <header className="p-3 mb-3 border-bottom">
        <div className="container">
            <div className="logo">
                <img src="/images/Deja_znak_wodny_zloty.png" alt="logo" title="logo" width='100%' height='100%'/>
            </div>

            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <nav>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" className="nav-link px-2 link-secondary">Główna</Link>
                        </li>
                        <li className='dropdown'>
                            <Link to="/services" className="nav-link px-2 link-secondary">Usługi</Link>

                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/services/brows" className="nav-link px-2 link-secondary">Brwi</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/portfolio" className="nav-link px-2 link-secondary">Realizacje</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link px-2 link-secondary">O mnie</Link>
                        </li>
                        <li>
                            <Link to="/references" className="nav-link px-2 link-secondary">Opinie</Link>
                        </li>
                        <li>
                            <Link to="/courses" className="nav-link px-2 link-secondary">Szkolenia</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link px-2 link-secondary">Kontakt</Link>
                        </li>
                    </ul>
                </nav>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                </form>

            </div>
        </div>
    </header>
    );
}

export default Header;