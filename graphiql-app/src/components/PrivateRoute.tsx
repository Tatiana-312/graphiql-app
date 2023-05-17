import React, { ReactElement, ReactNode } from 'react';
import { useAuth } from '../hooks/use-auth';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const { isAuth } = useAuth();

  return !isAuth ? (children as ReactElement) : <Navigate to="/" />;
};

export default PrivateRoute;
