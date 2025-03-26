import { useNavigate, useLocation } from "react-router-dom";
import routesConfig from "~/config/routes";

function Header({ logo }) {
    const location = useLocation();
    const navigate = useNavigate();

    const pathname = location.pathname.split("/").pop();

    const handleRedirect = (e) => {
        const targetPage = e.target.id;
        if (pathname !== targetPage) {
            if (targetPage === "login") {
                navigate(routesConfig.login);
            } else {
                navigate(routesConfig.register);
            }
        }
    };

    const handleSearch = e => {
        e.preventDefault();
    }

    const handleChangeBG = e => {
        console.log(e);

    }

    return (
        <div className="shadow-sm" contentEditable>
            <nav className="container-xxl nav navbar-expand-md navbar-light px-3" onMouseUp={handleChangeBG}>
                <img alt="Logo" className="img-fluid" src={logo} style={{ width: 80, height: 80 }} />

                <div className="d-flex flex-column justify-content-center w-75">
                    <form className="d-flex w-50 mx-auto" role="search" onSubmit={handleSearch}>
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary ms-2" type="submit">Search</button>
                    </form>
                </div>

                <div className="d-flex d-column gap-4">
                    <button
                        id="login"
                        onClick={handleRedirect}
                        className={`btn rounded-pill h-50 my-auto ${pathname === "login" ? "btn-primary" : "btn-outline-primary"}`}
                    >
                        Sign In
                    </button>

                    <button
                        id="register"
                        onClick={handleRedirect}
                        className={`btn rounded-pill h-50 my-auto ${pathname === "register" ? "btn-primary" : "btn-outline-primary"}`}
                    >
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Header;
