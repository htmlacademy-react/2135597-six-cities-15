import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, RouteConfig } from '../../shared/config/RouteConfig/RouteConfig';


export const AppRouter = () => (
  <Routes>
    {Object.values(RouteConfig).map((route:AppRouteProps) => (
      <Route
        key={route.path}
        element={route.element}
        path={route.path}
      >
      </Route>
    ))}
  </Routes>
);
