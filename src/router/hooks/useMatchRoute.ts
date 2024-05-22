import { matchRoutes, useLocation } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import type { IRoute } from '../types';

export function useMatchRoute(routes: IRoute[]) {
  const location = useLocation();
  const matchAllRoutes = matchRoutes(routes as RouteObject[], location);
  if (!matchAllRoutes || matchAllRoutes.length === 0) return;
  return matchAllRoutes.at(-1)?.route as IRoute;
}
