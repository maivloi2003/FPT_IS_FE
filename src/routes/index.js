// Routes Config
import routesConfig from '~/config/routes'

// Layouts
import { AdminLayout } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Contact from '~/pages/Contact';
import Register from '~/pages/Register';
import PostDetail from '~/pages/PostDetail';
import Posts from '~/pages/Posts';
import PostsAdmin from '~/pages/Admin/PostsAdmin';
import Pages from '~/pages/Admin/Pages';
import Media from '~/pages/Admin/Media';
import UsersAdmin from '~/pages/Admin/UsersAdmin';
import Dashboard from '~/pages/Admin/Dashboard';
import Themes from '~/pages/Admin/Themes';
import PageEditor from '~/pages/Admin/Pages/PageEditor';
import EditPost from '~/pages/Admin/PostsAdmin/EditPost';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.login, component: Login },
    { path: routesConfig.contact, component: Contact },
    { path: routesConfig.register, component: Register },
    { path: routesConfig.postDetail, component: PostDetail },
    { path: routesConfig.posts, component: Posts },
    { path: routesConfig.dashboard, component: Dashboard, layout: AdminLayout },
    { path: routesConfig.postsAdmin, component: PostsAdmin, layout: AdminLayout },
    { path: routesConfig.pages, component: Pages, layout: AdminLayout },
    { path: routesConfig.media, component: Media, layout: AdminLayout },
    { path: routesConfig.usersAdmin, component: UsersAdmin, layout: AdminLayout },
    { path: routesConfig.themes, component: Themes, layout: AdminLayout },
    { path: routesConfig.editPage, component: PageEditor },
    { path: routesConfig.editPost, component: EditPost },
];

const privateRoutes = [
];

const adminRoutes = [
]

export { publicRoutes, privateRoutes, adminRoutes };
