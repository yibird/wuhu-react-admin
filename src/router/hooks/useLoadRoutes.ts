import React from 'react';
import { routes as defaultRoutes } from '@/router';
import { mapMenusToRoutes, mergeRoutes } from '../help';
import type { IRoute } from '../types';
import { useEffect, useState } from 'react';
import { usePermissionStore } from '@/store';
import { RouteObject } from 'react-router-dom';

/**
 * 加载路由hooks
 */
export function useLoadRoutes(appRoutes: IRoute[] = defaultRoutes) {
  const { flatMenus, getServerMenus } = usePermissionStore();
  const [routes, setRoutes] = useState<IRoute[]>(appRoutes);

  useEffect(() => {
    getServerMenus();
  }, []);

  useEffect(() => {
    const routes = appRoutes.map((item) => {
      return item.path === '/' ? { ...item, children: mapMenusToRoutes(flatMenus) } : item;
    });
    setRoutes(routes);
  }, [flatMenus]);
  return routes;
}
