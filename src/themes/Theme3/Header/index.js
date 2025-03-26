import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
            <div className="container">
                {/* Logo */}
                <div className="d-flex flex-column align-items-center">
                    <h1 className="fw-light" style={{ fontFamily: "'Dancing Script', cursive" }}>
                        Văn Lợi
                    </h1>
                    <p className="text-muted small">I Shall Write Amongst The Stars</p>
                </div>

                {/* Nút Toggle Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link active" to="#">HOME</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">VIET +</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">ENG +</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">TRANSLATIONS</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">ABOUT +</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">CONTACT</Link></li>
                    </ul>
                </div>

                {/* Icon mạng xã hội */}
                <div className="d-flex gap-2">
                    <Link to="#" className="text-dark"><i className="fa-brands fa-twitter fa-lg"></i></Link>
                    <Link to="#" className="text-dark"><i className="fa-brands fa-facebook fa-lg"></i></Link>
                    <Link to="#" className="text-dark"><i className="fa-brands fa-instagram fa-lg"></i></Link>
                    <Link to="#" className="text-dark"><i className="fa-brands fa-linkedin fa-lg"></i></Link>
                    <Link to="#" className="text-dark"><i className="fa-solid fa-envelope fa-lg"></i></Link>
                    <Link to="#" className="text-dark"><i className="fa-brands fa-google fa-lg"></i></Link>
                    <Link to="#" className="text-dark"><i className="fa-solid fa-magnifying-glass fa-lg"></i></Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
