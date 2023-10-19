import React, { useEffect, PropsWithChildren, Fragment } from 'react';
import { useLocation, matchRoutes, useNavigate } from 'react-router-dom';
import { usePermissionStore } from '@/store';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import NotFound from '@/views/exception/notFound';
import Login from '@/views/login';

function updateTitle(title?: string) {
  if (!title) return;
  document.title = title;
}

// 路由白名单url,无需登录凭证,仍可正常访问
const routerWhiteList = ['/dashboard/analysis'];

function AuthRoute({ children }: PropsWithChildren) {
  NProgress.start();
  const isLogin = false;
  const routes = usePermissionStore().routes;

  const location = useLocation(),
    navigate = useNavigate();
  console.log('AuthRoute:AuthRoute:', routes);

  const mathchs = matchRoutes(routes, location);

  // 判断是否匹配到路由,匹配失败则跳转到404页面
  if (!mathchs || mathchs.length === 0) {
    return <NotFound />;
  }

  const { meta } = mathchs[0].route;

  // 判断是否登录,未登录跳转登录页
  if (isLogin) {
    return <Login />;
  }

  // 判断是否具有权限
  updateTitle(meta?.title);

  if (typeof children === 'undefined' || !children) return;
  return <Fragment key={children.toString()}>{children}</Fragment>;
}

export default AuthRoute;
