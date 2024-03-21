import React, { useEffect, PropsWithChildren, Fragment } from 'react';
import {
  useRoutes,
  useLocation,
  matchRoutes,
  useNavigate,
  useMatch,
  RouteObject,
  renderMatches,
} from 'react-router-dom';
import { usePermissionStore } from '@/store';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import NotFound from '@/views/exception/notFound';
import Login from '@/pages/login';

import { useTitle } from '@/hooks/web/useTitle';
import { useTabs } from '@/hooks/store/useTabs';

import type { AuthRouteProps, IRoute } from '../types';

// 路由白名单url,无需登录凭证,仍可正常访问
const routerWhiteList = ['/dashboard/analysis'];

function AuthRoute({ routes = [], children, beforeEach, afterEach }: AuthRouteProps) {
  NProgress.start();
  const appRoutes = useRoutes(routes as RouteObject[]),
    location = useLocation(),
    navigate = useNavigate(),
    setTitle = useTitle();
  const { changeTabById } = useTabs();

  const matchs = matchRoutes(routes as RouteObject[], location);

  const route = matchs!.at(-1)?.route as IRoute;
  // 判断是否匹配到路由,匹配失败则跳转到404页面
  if (!route) {
    return <NotFound />;
  }

  // const { route } = matchs.at(0)!;
  // const routeList = matchs.map((item) => item.route);

  // console.log('children:', children);
  // // const { meta, path } = mathchs[0].route;
  // // if (meta?.title) {
  // //   setTitle(meta.title);
  // // }

  beforeEach = route.beforeEach || beforeEach;

  // 前置守卫
  if (beforeEach && !beforeEach()) {
    console.log('run beforeEach...');
    return;
  }

  // changeTabById(route.key!);

  NProgress.done();
  return appRoutes;
  // return renderMatches(matchs);
}

export default AuthRoute;
