import React from 'react';
import { routes as defaultRoutes } from '@/router';
import { mapMenusToRoutes, mergeRoutes } from '../help';
import type { IRoute } from '../types';
import { useEffect, useState } from 'react';
import { usePermissionStore } from '@/store';
import { shallow } from 'zustand/shallow';

/**
 * 加载路由hooks
 */
export function useLoadRoutes(appRoutes: IRoute[] = defaultRoutes) {
  const { flatMenus, getServerMenus } = usePermissionStore((state) => {
    return {
      flatMenus: state.flatMenus,
      getServerMenus: state.getServerMenus,
    };
  }, shallow);
  const [routes, setRoutes] = useState<IRoute[]>(appRoutes);

  useEffect(() => {
    getServerMenus();
  }, []);

  useEffect(() => {
    setRoutes(mergeRoutes(appRoutes, mapMenusToRoutes(flatMenus)));
  }, [flatMenus]);
  return routes;
}
