import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../shared/const/router';
import { ReactNode } from 'react';

interface RequiredAuthProps {
    children: ReactNode;
}

export const RequiredAuth = ({children}: RequiredAuthProps) => {
  const auth = true;

  if (!auth) {
    return <Navigate to={AppRoutes.LOGIN} replace/>;
  }
  return children;
};
