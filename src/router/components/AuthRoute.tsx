import React, { useEffect, PropsWithChildren, Fragment } from 'react';
import { useLocation, matchRoutes, useNavigate } from 'react-router-dom';
import { usePermissionStore } from '@/store';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import NotFound from '@/views/exception/notFound';
import Login from '@/pages/login';

import { useTitle } from '@/hooks/web/useTitle';
import { useTabs } from '@/hooks/store/useTabs';

import type { RouteGuard } from '../types';

// 路由白名单url,无需登录凭证,仍可正常访问
const routerWhiteList = ['/dashboard/analysis'];

function AuthRoute({ children, beforeEach, afterEach }: PropsWithChildren<RouteGuard>) {
  // NProgress.start();
  const isLogin = false;
  const routes = usePermissionStore().routes;

  const location = useLocation(),
    navigate = useNavigate(),
    setTitle = useTitle();
  const { addTabByPath } = useTabs();

  console.log('AuthRoute:AuthRoute:', routes, location);

  const mathchs = matchRoutes(routes, location);
  console.log('mathchs:', mathchs);

  // 判断是否匹配到路由,匹配失败则跳转到404页面
  if (!mathchs || mathchs.length === 0) {
    return <NotFound />;
  }

  const { meta, path } = mathchs[0].route;
  if (meta?.title) {
    setTitle(meta.title);
  }

  if (beforeEach && beforeEach()) {
    console.log('run beforeEach...');
  }

  // addTabByPath(path!);

  // 判断是否登录,未登录跳转登录页
  // if (isLogin) {
  //   return <Login />;
  // }

  // // 判断是否具有权限
  // updateTitle(meta?.title);

  if (!children) return;
  return children;
  // return <Fragment key={children.toString()}>{children}</Fragment>;
}

export default AuthRoute;
