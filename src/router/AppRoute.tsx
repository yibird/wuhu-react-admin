import React from 'react';
import { useLoadRoutes } from '@/router';
import AuthRoute from '@/router/AuthRoute';
import { useRoutes, BrowserRouter } from 'react-router-dom';

function AppRoute() {
  const routes = useLoadRoutes();
  return <AuthRoute>{useRoutes(routes)}</AuthRoute>;
}

export default AppRoute;
