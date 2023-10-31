import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="p-3 mb-3 row">
            <div className="logo col-xs-12">
                <Link to="/" className="nav-link  d-flex justify-content-center px-2 link-secondary" ><img src="/images/Deja_znak_wodny_zloty.png" alt="logo" title="logo" width='70%'/></Link>
            </div>

            <div className="col-xs-12 d-flex flex-wrap align-items-center justify-content-center">
                <nav>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" className="nav-link px-2 link-secondary"><h5>Główna</h5></Link>
                        </li>
                        <li className='dropdown'>
                            <Link to="/services" className="nav-link px-2 link-secondary"><h5>Usługi</h5></Link>

                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/services/brows" className="nav-link px-2 link-secondary"><h5>Brwi</h5></Link>
                                </li>
                                <li>
                                    <Link to="/services/lips" className="nav-link px-2 link-secondary"><h5>Usta</h5></Link>
                                </li>
                                <li>
                                    <Link to="/services/eyelids" className="nav-link px-2 link-secondary"><h5>Kreski</h5></Link>
                                </li>
                                <li>
                                    <Link to="/services/medicalpigmentation" className="nav-link px-2 link-secondary"><h5>Pigmentacja medyczna</h5></Link>
                                </li>
                                <li>
                                    <Link to="/services/cover" className="nav-link px-2 link-secondary"><h5>Cover</h5></Link>
                                </li>
                                <li>
                                    <Link to="/services/removal" className="nav-link px-2 link-secondary"><h5>Usuwanie makijżu permanentnego i tatuaży</h5></Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/portfolio" className="nav-link px-2 link-secondary"><h5>Realizacje</h5></Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-link px-2 link-secondary"><h5>O mnie</h5></Link>
                        </li>
                        <li>
                            <Link to="/references" className="nav-link px-2 link-secondary"><h5>Opinie</h5></Link>
                        </li>
                        <li>
                            <Link to="/courses" className="nav-link px-2 link-secondary"><h5>Szkolenia</h5></Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link px-2 link-secondary"><h5>Kontakt</h5></Link>
                        </li>
                    </ul>
                </nav>

                {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                </form> */}

            </div>
        </header>
    );
};

export default Header;