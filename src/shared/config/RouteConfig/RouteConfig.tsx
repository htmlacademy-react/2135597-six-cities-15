import { RouteProps } from 'react-router-dom';
import { AppRoutes } from '../../const/router';
import { Main } from '../../../pages/Main/Main';
import { LoginPage } from '../../../pages/LoginPage/LoginPage';
import { FavoritesPage } from '../../../pages/FavoritesPage/FavoritesPage';
import { OfferPage } from '../../../pages/OfferPage/OfferPage';
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage';


export type AppRouteProps = RouteProps & {
    isAuth: boolean;
 }
export const RouteConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: AppRoutes.MAIN,
    element: <Main placesQuantity={4} />,
    isAuth: false
  },
  [AppRoutes.LOGIN]: {
    path: AppRoutes.LOGIN,
    element: <LoginPage />,
    isAuth: false
  },
  [AppRoutes.FAVORITES]: {
    path: AppRoutes.FAVORITES,
    element: <FavoritesPage />,
    isAuth: true
  },
  [AppRoutes.OFFER]: {
    path: AppRoutes.OFFER,
    element: <OfferPage />,
    isAuth: true
  },
  [AppRoutes.FORBIDDEN]: {
    path: AppRoutes.FORBIDDEN,
    element: <ForbiddenPage />,
    isAuth: false
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundPage />,
    isAuth: false
  },
};
