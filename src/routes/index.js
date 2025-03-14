// Routes Config
import routesConfig from '~/config/routes'

// Layouts
import { DefaultLayout, AdminLayout } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Dashboard from '~/pages/Admin/Dashboard';
import Statistical from '~/pages/Admin/Statistical';
import OrderLists from '~/pages/Admin/OrderLists';
import ProductsAdmin from '~/pages/Admin/ProductsAdmin';
import ProductStock from '~/pages/Admin/ProductStock';
import Cart from '~/pages/Cart';
import Contact from '~/pages/Contact';
import Register from '~/pages/Register';
import ProductDetail from '~/pages/ProductDetail';

const publicRoutes = [
    { path: routesConfig.home, component: Home, layout: DefaultLayout },
    { path: routesConfig.login, component: Login, layout: DefaultLayout },
    { path: routesConfig.contact, component: Contact, layout: DefaultLayout },
    { path: routesConfig.register, component: Register, layout: DefaultLayout },
    { path: routesConfig.productDetail, component: ProductDetail, layout: DefaultLayout },
];

const privateRoutes = [
    { path: routesConfig.cart, component: Cart, layout: DefaultLayout },
    { path: routesConfig.payment, component: Cart, layout: DefaultLayout },
];

const adminRoutes = [
    { path: routesConfig.dashboard, component: Dashboard, layout: AdminLayout },
    { path: routesConfig.orderLists, component: OrderLists, layout: AdminLayout },
    { path: routesConfig.products, component: ProductsAdmin, layout: AdminLayout },
    { path: routesConfig.productStock, component: ProductStock, layout: AdminLayout },
    { path: routesConfig.statistical, component: Statistical, layout: AdminLayout },
]

export { publicRoutes, privateRoutes, adminRoutes };
