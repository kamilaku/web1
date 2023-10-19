import React from 'react';

function Footer() {
    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            
                <div class="col-md-4 d-flex align-items-center">
                    <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
                </div>

                <div class="logo">
                    <img src="/images/Deja_znak_wodny_zloty-logo.png" alt="logo" title="logo" width='15%' height='15%'/>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;