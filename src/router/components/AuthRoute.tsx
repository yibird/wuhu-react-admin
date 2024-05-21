import React, { useEffect } from 'react';
import { useRoutes, useNavigate, RouteObject } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import NotFound from '@/views/exception/notFound';
import Forbidden from '@/views/exception/forbidden';
import Login from '@/pages/login';
import { useTabs } from '@/hooks/store/useTabs';
import type { AuthRouteProps, IRoute } from '../types';
import { useMatchRoute } from '../hooks';

export default function AuthRoute({ routes = [], beforeEach, afterEach }: AuthRouteProps) {
  NProgress.start();

  const { openTabById } = useTabs();
  const appRoutes = useRoutes(routes as RouteObject[]),
    navigate = useNavigate();
  const route = useMatchRoute(routes);
  console.log('routerouterouteroute...', route);
  // 判断是否匹配到路由,匹配失败则跳转到404页面
  if (!route) {
    return <NotFound />;
  }

  beforeEach = route.beforeEach || beforeEach;
  // 前置守卫
  if (typeof beforeEach === 'function' && !beforeEach(route)) {
    // console.log('run beforeEach...');
    navigate('/forbidden');
    return appRoutes;
  }

  useEffect(() => {
    console.log('URL changed to:', route);
    // openTabById(route.key!);
  }, [location]);

  afterEach = route.afterEach || afterEach;
  typeof afterEach === 'function' && afterEach(route);

  NProgress.done();
  return appRoutes;
}
