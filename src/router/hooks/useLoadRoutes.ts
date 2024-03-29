import { defaultRoutes } from '@/router/routes';
import { mapMenusToRoutes, mergeRoutes } from '../help';
import type { IMenu } from '@/common/menus';
import type { IRoute } from '../types';

/**
 * 加载路由hooks
 */
export function useLoadRoutes(menus: IMenu[], routes: IRoute[] = defaultRoutes) {
  // 获取默认路由
  // const [routes, setRoutes] = useState<RouteObject[]>(defaultRoutes);
  return mergeRoutes(routes, mapMenusToRoutes(menus), '/');
}
