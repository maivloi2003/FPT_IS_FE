import { Link } from "react-router-dom";
import { useState } from "react";
import images from "~/assets/images";

function HeaderAdmin() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="navbar navbar-light shadow-sm px-3 bg-dark rounded">
            <div className="container">
                {/* Logo & Admin Panel */}
                <Link className="navbar-brand text-white" to="/admin/dashboard">Admin Panel</Link>

                {/* Dropdown Menu */}
                <div className="dropdown">
                    <button
                        className="btn btn-light border-0 d-flex align-items-center"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <img
                            src={images.admin}
                            alt="Admin Avatar"
                            className="rounded-circle"
                            width="40"
                            height="40"
                        />
                    </button>

                    {dropdownOpen && (
                        <ul className="dropdown-menu show" style={{ right: 0, left: "auto" }}>
                            <li><Link className="dropdown-item" to="/admin/profile">Profile</Link></li>
                            <li><Link className="dropdown-item" to="/admin/settings">Settings</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item text-danger">Logout</button></li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default HeaderAdmin;
