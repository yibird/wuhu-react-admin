import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { usePermissionStore } from '@/store';
import { useMount } from 'ahooks';
import { defaultRoutes } from '@/router/routes';
import { mergeRoutes } from '@/router/help';
import { menus } from '@/common';
import { IRoute } from '../types';
import AuthRoute from './AuthRoute';

const MemoizedAppRoute = React.memo<{ routes: IRoute[] }>(({ routes }) => {
  return useRoutes(routes);
  return <AuthRoute>{useRoutes(routes)}</AuthRoute>;
});

export function AppRoute() {
  const { routes, setServerMenus } = usePermissionStore();
  const [appRoutes, setAppRoutes] = useState(defaultRoutes);
  useMount(() => {
    setServerMenus(menus);
  });

  useEffect(() => {
    setAppRoutes(mergeRoutes(appRoutes, routes, '/'));
  }, [routes]);
  return <MemoizedAppRoute routes={appRoutes} />;
}
