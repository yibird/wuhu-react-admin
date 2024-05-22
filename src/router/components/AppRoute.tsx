import React from 'react';
import { useLoadRoutes } from '@/router';
import AuthRoute from './AuthRoute';
import { RouterProvider } from '../context';
import type { RouteGuard } from '../types';

export default function AppRoute(guard: RouteGuard) {
  const routes = useLoadRoutes();
  return (
    <RouterProvider value={routes}>
      <AuthRoute routes={routes} {...guard} />
    </RouterProvider>
  );
}
