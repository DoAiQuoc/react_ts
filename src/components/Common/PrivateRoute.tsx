import * as React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps {}

export function PrivateRoute(props: RouteProps) {
  const isLogging = !!localStorage.getItem('aeonmall_ls');
  if (!isLogging) return <Navigate to="/login" replace />;

  return <Route {...props} />;
}
