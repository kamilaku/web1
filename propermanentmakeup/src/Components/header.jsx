import React from 'react';

function Header() {
    return (
    <header class="p-3 mb-3 border-bottom">
        <div class="container">
            <div class="logo">
                <img src="/images/Deja_znak_wodny_zloty.png" alt="logo" title="logo" width='100%' height='100%'/>
            </div>
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-secondary">Główna</a></li>
                <li><a href="#" class="nav-link px-2 link-body-emphasis">Zabiegi</a></li>
                <li><a href="#" class="nav-link px-2 link-body-emphasis">Realizacje</a></li>
                <li><a href="#" class="nav-link px-2 link-body-emphasis">O mnie</a></li>
                <li><a href="#" class="nav-link px-2 link-body-emphasis">Opinie</a></li>
                <li><a href="#" class="nav-link px-2 link-body-emphasis">Szkolenia</a></li>
                <li><a href="#" class="nav-link px-2 link-body-emphasis">Kontakt</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
            </form>

            </div>
        </div>
    </header>
    );
}

export default Header;