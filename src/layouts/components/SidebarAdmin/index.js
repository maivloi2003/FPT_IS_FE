import { Link, useLocation } from "react-router-dom";

function SidebarAdmin({ items }) {
    const location = useLocation();
    const currentPath = location.pathname.split("/").pop();

    return (
        <nav className="d-flex flex-column p-3">
            <h4 className="text-white">Admin</h4>
            {items.map((item, index) => {
                const isActive = currentPath.toLowerCase() === item.title.toLowerCase();
                return (
                    <Link
                        to={item.to}
                        key={index}
                        className={`border rounded p-2 text-white my-2 ${isActive ? "fw-bold" : "text-decoration-none"}`}
                    >
                        {item.icon}
                        {item.title}
                    </Link>
                );
            })}
        </nav>
    );
}

export default SidebarAdmin;
