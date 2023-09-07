import React, { useEffect, PropsWithChildren } from 'react';
import { useLocation, matchRoutes, useNavigate } from 'react-router-dom';
import { IRoute, useLoadRoutes } from '@/router';
import { useTitle } from '@/hooks/web/useTitle';
import { useTabStore } from '@/store/index';
import { eq } from 'lodash-es';

function updateTitle(route: IRoute) {
  if (!route.meta) return;
  const title = route.meta.title;
  title && (document.title = title);
}

function useOpenRoute() {
  const addTab = useTabStore((state) => state.addTab, eq);
  return (route: IRoute) => addTab(route.meta?.menu!);
}

const AuthRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation(),
    navigate = useNavigate(),
    routes = useLoadRoutes(),
    mathchs = matchRoutes(routes, location);
  const openRoute = useOpenRoute();

  const isExist = mathchs?.some((item) => item.pathname == location.pathname);
  useEffect(() => {
    if (!isExist) {
      console.log('路由不存在...');
      return;
    }
    const mathch = (mathchs || []).at(-1);
    if (!mathch || mathch?.route.path === '*') {
      console.log('匹配404');
      return;
    }
    openRoute(mathch.route);
    updateTitle(mathch.route);

    // console.log(mathch);
    if (mathch.pathname === '/login') {
      navigate(-1);
      return;
    }
  }, [location]);

  if (typeof children === 'undefined') return null;
  return <>{children}</>;
};

export default AuthRoute;
