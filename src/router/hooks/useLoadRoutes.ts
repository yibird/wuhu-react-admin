import { routes as defaultRoutes } from '@/router';
import { mapMenusToRoutes, mergeRoutes } from '../help';
import type { IRoute } from '../types';
import { useEffect, useState } from 'react';
import { usePermissionStore } from '@/store';
import React from 'react';

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
    console.log('flatMenus', flatMenus);
    if (flatMenus) {
      const mergedRoutes = mergeRoutes(appRoutes, mapMenusToRoutes(flatMenus), '/');
      setRoutes(mergedRoutes);
    }
  }, [flatMenus]);
  return routes;
}
