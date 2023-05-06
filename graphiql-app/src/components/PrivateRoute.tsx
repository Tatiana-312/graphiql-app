import React from 'react';
import { useAuth } from '../hooks/use-auth';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isAuth } = useAuth();

  return !isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
