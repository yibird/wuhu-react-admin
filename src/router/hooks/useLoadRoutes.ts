import { defaultRoutes } from '@/router/routes';
import { mapMenusToRoutes, mergeRoutes } from '../help';
import type { IRoute } from '../types';
import { IMenu } from '#/config';

/**
 * 加载路由hooks
 */
export function useLoadRoutes(menus: IMenu[], routes: IRoute[] = defaultRoutes) {
  // 获取默认路由
  // const [routes, setRoutes] = useState<RouteObject[]>(defaultRoutes);
  return mergeRoutes(routes, mapMenusToRoutes(menus), '/');
}
