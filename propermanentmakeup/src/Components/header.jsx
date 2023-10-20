import React from 'react';
import { Link } from "react-router-dom";


function Header() {
    return (
    <header class="p-3 mb-3 border-bottom">
        <div class="container">
            <div class="logo">
                <img src="/images/Deja_znak_wodny_zloty.png" alt="logo" title="logo" width='100%' height='100%'/>
            </div>

            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <nav>
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" class="nav-link px-2 link-secondary">Główna</Link>
                        </li>
                        <li>
                            <Link to="/services" class="nav-link px-2 link-secondary">Usługi</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" class="nav-link px-2 link-secondary">Realizacje</Link>
                        </li>
                        <li>
                            <Link to="/about" class="nav-link px-2 link-secondary">O mnie</Link>
                        </li>
                        <li>
                            <Link to="/references" class="nav-link px-2 link-secondary">Opinie</Link>
                        </li>
                        <li>
                            <Link to="/courses" class="nav-link px-2 link-secondary">Szkolenia</Link>
                        </li>
                        <li>
                            <Link to="/contact" class="nav-link px-2 link-secondary">Kontakt</Link>
                        </li>
                    </ul>
                </nav>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
                </form>

            </div>
        </div>
    </header>
    );
}

export default Header;