import React, { FC } from 'react';
import { useAuth } from '../hooks/use-auth';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: FC = () => {
  const { isAuth } = useAuth();

  return !isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
