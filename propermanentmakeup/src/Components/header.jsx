import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (<>
        <header className="row py-2">
            <div className="logo col-xs-12">
                <Link to="/" className="d-flex justify-content-center px-2" ><img src="/images/Deja_znak_wodny_zloty.png" alt="logo" title="logo" width='70%'/></Link>
            </div>

            <div className="col-xs-12 d-flex flex-wrap align-items-center justify-content-center">
                <nav className='main-menu'>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" className="nav-link px-2">Główna</Link>
                        </li>
                        <li className='dropdown'>
                            <Link to="/services" className="nav-link px-2">Usługi</Link>

                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/services/brows" className="nav-link px-2">Brwi</Link>
                                </li>
                                <li>
                                    <Link to="/services/lips" className="nav-link px-2">Usta</Link>
                                </li>
                                <li>
                                    <Link to="/services/eyelids" className="nav-link px-2">Kreski</Link>
                                </li>
                                <li>
                                    <Link to="/services/medicalpigmentation" className="nav-link px-2">Pigmentacja medyczna</Link>
                                </li>
                                <li>
                                    <Link to="/services/cover" className="nav-link px-2">Cover</Link>
                                </li>
                                <li>
                                    <Link to="/services/removal" className="nav-link px-2">Usuwanie makijżu permanentnego i tatuaży</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/portfolio" className="nav-link px-2">Realizacje</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link px-2">O mnie</Link>
                        </li>
                        <li>
                            <Link to="/references" className="nav-link px-2">Opinie</Link>
                        </li>
                        <li>
                            <Link to="/courses" className="nav-link px-2">Szkolenia</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link px-2">Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <hr className="featurette-divider mt-0"/>
    </>);
};

export default Header;