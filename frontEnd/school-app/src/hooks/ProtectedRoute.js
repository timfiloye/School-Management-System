// src/ProtectedRoute.js

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../contexts/userContext';

const ProtectedRoute = () => {
    console.log('PROTECTED ROUTE');
  const { isAuthenticated, loading, setLoading, token } = useUserContext();

  return token ? <Outlet /> : <Navigate to="/login"  />;
};

export default ProtectedRoute;
