import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes, adminRoutes } from '~/routes';
import routesConfig from '~/config/routes';

const isAuthenticated = () => !!localStorage.getItem('authToken');
const getUserRole = () => localStorage.getItem('userRole');

const PrivateRoute = ({ children, requiredRole }) => {
  if (!isAuthenticated()) {
    return <Navigate to={routesConfig.login} />;
  }

  const userRole = getUserRole();
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to={routesConfig.home} />;
  }

  return children;
};

const renderRoutes = (routes, requiredRole = null) => {
  return routes.map(({ path, component: Page, layout: Layout }, index) => (
    <Route
      key={index}
      path={path}
      element={
        requiredRole ? (
          <PrivateRoute requiredRole={requiredRole}>
            <Layout>
              <Page />
            </Layout>
          </PrivateRoute>
        ) : (
          <Layout>
            <Page />
          </Layout>
        )
      }
    />
  ));
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          {renderRoutes(publicRoutes)}

          {/* Private Routes (User) */}
          {renderRoutes(privateRoutes, 'user')}

          {/* Admin Routes */}
          {renderRoutes(adminRoutes, 'admin')}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
