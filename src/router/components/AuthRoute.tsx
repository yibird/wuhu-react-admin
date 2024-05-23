import React, { useEffect } from 'react';
import { useRoutes, useNavigate, RouteObject } from 'react-router-dom';
import NotFound from '@/views/exception/notFound';
// import { useMenus } from '@/hooks';
import { useMatchRoute } from '../hooks';
import type { AuthRouteProps } from '../types';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function AuthRoute({ routes = [], beforeEach, afterEach }: AuthRouteProps) {
  const navigate = useNavigate();
  // const { openMenuById } = useMenus();
  const appRoutes = useRoutes(routes as RouteObject[]);
  const route = useMatchRoute(routes);
  NProgress.start();
  // 判断是否匹配到路由,匹配失败则跳转到404页面
  if (!route) {
    return <NotFound />;
  }

  beforeEach = route.beforeEach || beforeEach;
  // 前置守卫
  if (typeof beforeEach === 'function' && !beforeEach(route)) {
    navigate('/forbidden');
    return appRoutes;
  }

  useEffect(() => {
    // openTabById(route.key!);
  }, [location]);

  afterEach = route.afterEach || afterEach;
  typeof afterEach === 'function' && afterEach(route);

  NProgress.done();
  return appRoutes;
}
