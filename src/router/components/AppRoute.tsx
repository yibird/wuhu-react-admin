import React from 'react';
import { useLoadRoutes } from '@/router';
import AuthRoute from './AuthRoute';
import { RouterProvider } from '../context';
import type { RouteGuard } from '../types';
import { RouteObject, useRoutes } from 'react-router-dom';

export default function AppRoute(guard: RouteGuard) {
  const routes = useLoadRoutes();
  const appRoutes = useRoutes(routes as RouteObject[]);
  return (
    <RouterProvider value={routes}>
      {appRoutes}
      {/* <AuthRoute routes={routes} {...guard} /> */}
    </RouterProvider>
  );
}
