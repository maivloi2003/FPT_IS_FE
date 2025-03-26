import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-light text-center py-4 border-top">
            <div className="container">
                <p className="mb-2">
                    © 2025 Văn Lợi · <Link to="#">Privacy</Link> · <Link to="#">Terms</Link> · <Link to="#">Collection notice</Link>
                </p>

                <div className="d-flex justify-content-center gap-3 mb-2">
                    <button className="btn btn-light border">
                        <i className="bi bi-journal-text"></i> Start Writing
                    </button>
                    <button className="btn btn-light border">Get the app</button>
                </div>

                <p className="text-muted">Substack is the home for great culture</p>
            </div>
        </footer>
    );
}

export default Footer;
