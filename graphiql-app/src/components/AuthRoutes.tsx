import React, { FC } from 'react';
import { useAuth } from '../hooks/use-auth';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoutes: FC = () => {
  const { isAuth } = useAuth();

  return !isAuth ? <Outlet /> : <Navigate to="/main" />;
};

export default AuthRoutes;
