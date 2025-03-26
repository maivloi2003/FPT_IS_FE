import React from "react";
import { Link } from "react-router-dom";
import { ChatIcon, NoticeIcon, SearchIcon } from "~/components/Icon";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid f-flex flex-column px-4">
                <div className="container-fluid d-flex justify-content-center position-relative">
                    {/* Logo */}
                    <Link className="navbar-brand fw-bold" to="#">Văn Lợi</Link>
                    {/* Icon và nút */}
                    <div className="d-flex align-items-center gap-3 position-absolute end-0">
                        <SearchIcon />
                        <ChatIcon />
                        <NoticeIcon />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                    {/* Menu */}
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><Link className="nav-link active" to="#">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">Notes</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">English Writing</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">Bài Tiếng Việt</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">Truyện ngắn</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">Poems / Thơ</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">Nghề viết</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">About</Link></li>
                    </ul>


                </div>
            </div>
        </nav>
    );
}

export default Header;
