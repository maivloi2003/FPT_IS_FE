import { Link } from "react-router-dom";
import { HomeIcon } from "~/components/Icon";

function Menu() {
    return (
        <div className="container-xxl">
            <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to=""><HomeIcon /></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="#">Latest</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Social News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Business</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">International</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Sport</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Entertainment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Law</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Technology</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Life</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;