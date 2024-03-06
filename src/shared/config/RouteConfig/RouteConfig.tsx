import { RouteProps } from 'react-router-dom';
import { AppRoutes } from '../../const/router';
import { Main } from '../../../pages/Main/Main';
import { LoginPage } from '../../../pages/LoginPage/LoginPage';
import { FavoritesPage } from '../../../pages/FavoritesPage/FavoritesPage';
import { OfferPage } from '../../../pages/OfferPage/OfferPage';
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage';
import { ForbiddenPage } from '../../../pages/ForbiddenPage/ForbiddenPage';


export type AppRouteProps = RouteProps & {
    authOnly: boolean;
 }
export const RouteConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: AppRoutes.MAIN,
    element: <Main placesQuantity={4} />,
    authOnly: false
  },
  [AppRoutes.LOGIN]: {
    path: AppRoutes.LOGIN,
    element: <LoginPage />,
    authOnly: false
  },
  [AppRoutes.FAVORITES]: {
    path: AppRoutes.FAVORITES,
    element: <FavoritesPage />,
    authOnly: true
  },
  [AppRoutes.OFFER]: {
    path: `${AppRoutes.OFFER}/:id`,
    element: <OfferPage />,
    authOnly: true
  },
  [AppRoutes.FORBIDDEN]: {
    path: AppRoutes.FORBIDDEN,
    element: <ForbiddenPage />,
    authOnly: false
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundPage />,
    authOnly: false
  },
};
