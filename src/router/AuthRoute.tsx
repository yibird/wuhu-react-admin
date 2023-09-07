import React, { useEffect, PropsWithChildren, Fragment } from 'react';
import { eq } from 'lodash-es';
import { useLocation, matchRoutes, useNavigate } from 'react-router-dom';
import { IRoute, useLoadRoutes } from '@/router';
// import { useTitle } from '@/hooks/web/useTitle';
import { useTabStore } from '@/store/index';

function updateTitle({ meta }: IRoute) {
  if (!meta) return;
  if (meta.title) {
    document.title = meta.title;
  }
}

function useOpenRoute() {
  const addTab = useTabStore((state) => state.addTab, eq);
  return (route: IRoute) => {
    if (route.meta?.menu) {
      addTab(route.meta?.menu);
    }
  };
}

function AuthRoute({ children }: PropsWithChildren) {
  const location = useLocation(),
    navigate = useNavigate(),
    routes = useLoadRoutes(),
    mathchs = matchRoutes(routes, location),
    openRoute = useOpenRoute(),
    isExist = mathchs?.some((item) => item.pathname === location.pathname);

  useEffect(() => {
    if (!isExist) {
      // console.log('路由不存在...');
      return;
    }
    const mathch = (mathchs || []).at(-1);
    if (!mathch || mathch?.route.path === '*') {
      // console.log('匹配404');
      return;
    }
    openRoute(mathch.route);
    updateTitle(mathch.route);

    // console.log(mathch);
    if (mathch.pathname === '/login') {
      navigate(-1);
    }
  }, [location]);

  if (typeof children === 'undefined' || !children) return null;
  return <Fragment key={children.toString()}>{children}</Fragment>;
}

export default AuthRoute;
