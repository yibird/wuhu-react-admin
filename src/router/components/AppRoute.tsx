import React from 'react';
import { useRoutes } from 'react-router-dom';

import { usePermissionStore, useTabStoreSelectors } from '@/store';
import { useLoadRoutes } from '../hooks/useLoadRoutes';

export function AppRoute() {
  const { flatMenus, serverMenus } = usePermissionStore();
  const { initializeHomeMenu } = useTabStoreSelectors.getState();
  const routes = useLoadRoutes(flatMenus);
  initializeHomeMenu(flatMenus);
  return useRoutes(routes);
}
