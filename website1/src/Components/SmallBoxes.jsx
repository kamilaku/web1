import React from "react";
import { Link } from "react-router-dom";

const SmallBoxes = () => {
    return (
        <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-4 d-flex flex-column">
                <Link to="/services/eyelids" className="d-flex justify-content-center px-2 py-4 link-secondary" ><img src='/images/pic3.jpeg' className="bd-placeholder-img rounded object-fit-cover img-dotted" width="140" height="140" /></Link>

                <h2 className="fw-normal d-flex justify-content-center pt-4">Kreski</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                <p className="mt-auto"><a className="btn btn-outline-secondary d-flex justify-content-center" href="/services/eyelids">Pokaż »</a></p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 d-flex flex-column">
                <Link to="/services/lips" className="d-flex justify-content-center px-2 py-4 link-secondary" ><img src='/images/pic4.jpeg' className="bd-placeholder-img rounded object-fit-cover img-dotted" width="140" height="140" /></Link>
                <h2 className="fw-normal d-flex justify-content-center pt-4">Usta</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                <p className="mt-auto"><a className="btn btn-outline-secondary d-flex justify-content-center" href="/services/lips">Pokaż »</a></p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 d-flex flex-column">
                <Link to="/services/brows" className="d-flex justify-content-center px-2 py-4 link-secondary" ><img src='/images/pic5.jpeg' className="bd-placeholder-img rounded object-fit-cover img-dotted" width="140" height="140" /></Link>

                <h2 className="fw-normal d-flex justify-content-center pt-4">Brwi</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                <p className="mt-auto"><a className="btn btn-outline-secondary d-flex justify-content-center" href="/services/brows">Pokaż »</a></p>
            </div>
        </div>
    );
};

export default SmallBoxes;