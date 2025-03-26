import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes, adminRoutes } from '~/routes';
import routesConfig from '~/config/routes';
import { useContext, } from 'react';
import { Theme1, Theme2, Theme3 } from './themes';
import { DefaultLayout } from './layouts';
import { LayoutContext } from './context/LayoutContext';

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

function App() {
  const { selectedLayout } = useContext(LayoutContext);


  const getLayout = (layout) => {
    if (layout) return layout;
    switch (selectedLayout) {
      case "layout1":
        return Theme1;
      case "layout2":
        return Theme2;
      case "layout3":
        return Theme3;
      default:
        return DefaultLayout;
    }
  };

  const renderRoutes = (routes, requiredRole = null, forceLayout = null) => {
    return routes.map(({ path, component: Page, layout }, index) => {
      const LayoutComponent = forceLayout || getLayout(layout);

      return (
        <Route
          key={index}
          path={path}
          element={
            requiredRole ? (
              <PrivateRoute requiredRole={requiredRole}>
                <LayoutComponent>
                  <Page />
                </LayoutComponent>
              </PrivateRoute>
            ) : (
              <LayoutComponent>
                <Page />
              </LayoutComponent>
            )
          }
        />
      );
    });
  };

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
