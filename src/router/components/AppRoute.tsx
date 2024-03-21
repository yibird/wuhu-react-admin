import React, { useEffect, useMemo, useState } from 'react';
import { usePermissionStore } from '@/store';
import { useMount } from 'ahooks';
import { defaultRoutes } from '@/router/routes';
import { mapMenusToRoutes, mergeRoutes } from '@/router/help';
import { menus } from '@/common';
import type { RouteGuard } from '../types';
import AuthRoute from './AuthRoute';
import { RouterProvider } from '../context';

export function AppRoute(guard: RouteGuard) {
  const { flatMenus, getServerMenus } = usePermissionStore();
  const routes = useMemo(() => {
    return mergeRoutes(defaultRoutes, mapMenusToRoutes(flatMenus), '/');
  }, [flatMenus]);
  useMount(() => {
    getServerMenus();
  });

  return (
    <RouterProvider value={routes}>
      <AuthRoute routes={routes} />
    </RouterProvider>
  );
}
