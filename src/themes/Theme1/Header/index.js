import { Link } from "react-router-dom";
import { FacebookIcon, GoogleIcon, PhoneIcon, SearchIcon } from "~/components/Icon";

function Header() {
    return (
        <header className="bg-secondary text-white py-3">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">

                    <div>
                        <FacebookIcon className="me-3" />
                        <GoogleIcon className="me-3" />
                        <PhoneIcon className="me-3" />
                    </div>


                    <div>
                        <form className="d-flex">
                            <input type="text" className="form-control" placeholder="Search" />
                            <button className="btn btn-outline-light mx-3" type="submit">
                                <SearchIcon />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Logo chính giữa */}
                <div className="text-center my-3">
                    <h1 className="fw-bold" style={{ fontSize: "2.5rem" }}>SPIEL</h1>
                </div>

                {/* Menu */}
                <nav className="text-center">
                    <Link to="#" className="text-white mx-3 text-decoration-none">News</Link>
                    <Link to="#" className="text-white mx-3 text-decoration-none">Reviews</Link>
                    <Link to="#" className="text-white mx-3 text-decoration-none">Guides</Link>
                    <Link to="#" className="text-white mx-3 text-decoration-none">Trending</Link>
                    <Link to="#" className="text-white mx-3 text-decoration-none">Platform ▾</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
