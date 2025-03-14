import HeaderAdmin from "~/layouts/components/HeaderAdmin";
import SidebarAdmin from "~/layouts/components/SidebarAdmin";

function AdminLayout({ children }) {
    return (
        <div>
            <SidebarAdmin />
            <div>
                <HeaderAdmin />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;