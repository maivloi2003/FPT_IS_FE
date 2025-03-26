import { Link } from "react-router-dom";
import { FacebookIcon, GoogleIcon, PhoneIcon } from "~/components/Icon";

function Footer() {
    return (
        <footer className="bg-light py-4">
            <div className="container">
                <div className="row align-items-center">
                    {/* Logo bên trái */}
                    <div className="col-md-4 text-start">
                        <h4 className="fw-bold fst-italic">Nook</h4>
                    </div>

                    {/* Menu điều hướng ở giữa */}
                    <div className="col-md-4 text-center">
                        <nav>
                            <Link to="#" className="text-dark mx-3 fw-semibold text-decoration-none">ABOUT</Link>
                            <Link to="#" className="text-dark mx-3 fw-semibold text-decoration-none">DIY</Link>
                            <Link to="#" className="text-dark mx-3 fw-semibold text-decoration-none">CRAFTS</Link>
                            <Link to="#" className="text-dark mx-3 fw-semibold text-decoration-none">HOLIDAYS</Link>
                        </nav>
                    </div>

                    {/* Icon mạng xã hội bên phải */}
                    <div className="col-md-4 text-end">
                        <FacebookIcon className="mx-2 fs-5" />
                        <GoogleIcon className="mx-2 fs-5" />
                        <PhoneIcon className="mx-2 fs-5" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;