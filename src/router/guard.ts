import { IRoute } from './types';

// 路由白名单url,无需登录凭证,仍可正常访问
const routerWhiteList = ['/dashboard/analysis'];

export const beforeEachGuard = (to: IRoute, from?: IRoute) => {
  const title = to.meta?.title;
  if (title) {
    document.title = title;
  }
  return true;
};

export const afterEachGuard = (to?: IRoute, from?: IRoute) => {};
