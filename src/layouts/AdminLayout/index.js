
import { DashboardIcon, MediaIcon, PagesIcon, PostsAdminIcon, ThemesIcon, UsersAdminIcon } from '~/components/Icon';
import routesConfig from '~/config/routes'
import HeaderAdmin from "~/layouts/components/HeaderAdmin";
import SidebarAdmin from "~/layouts/components/SidebarAdmin";

function AdminLayout({ children }) {
    return (
        <div className="container-fluid row">
            <div className="col-2 bg-dark text-white vh-100">
                <SidebarAdmin items={
                    [
                        { title: 'Dashboard', to: routesConfig.dashboard, icon: <DashboardIcon className="me-2" /> },
                        { title: 'Posts', to: routesConfig.postsAdmin, icon: <PostsAdminIcon className="me-2" /> },
                        { title: 'Themes', to: routesConfig.themes, icon: <ThemesIcon className="me-2" /> },
                        { title: 'Pages', to: routesConfig.pages, icon: <PagesIcon className="me-2" /> },
                        { title: 'Media', to: routesConfig.media, icon: <MediaIcon className="me-2" /> },
                        { title: 'Users', to: routesConfig.usersAdmin, icon: <UsersAdminIcon className="me-2" /> },
                    ]
                } />
            </div>
            <div className="col-10">
                <HeaderAdmin />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;