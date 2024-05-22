import React, { createRef } from 'react';
import KeepAlive from 'keepalive-for-react';
import type { LazyComponent, IRoute } from './types';
import type { IMenu } from '#/config';
import { RouterKeyEnum } from '@/enums';

const getRouteModules = () => {
  const modules = import.meta.glob('../views/**/*.tsx') as Record<string, LazyComponent>;
  return Object.keys(modules)
    .filter((key) => key.endsWith('/index.tsx'))
    .reduce((acc, key) => {
      const newKey = key.replace('../views', '').replace('/index.tsx', '');
      return { ...acc, [newKey]: modules[key] };
    }, {}) as Record<string, LazyComponent>;
};

const modules = getRouteModules();

function createRouteElement(menu: IMenu) {
  const path = menu.path;
  if (!path) return;
  const component = modules[path];
  if (!component) {
    return;
  }
  const element = createElement(component);
  if (typeof menu.keepAlive === 'undefined' || menu.keepAlive) {
    return React.createElement(KeepAlive, {
      activeName: RouterKeyEnum.KEEPALIVE_PREFIX + menu.id,
      children: element,
    });
  }
  return element;
}
/**
 * 菜单集合转路由集合。如果菜单类型为菜单项(type=2),则组装路由返回,
 * 如果菜单类型为目录菜单(type=1),则递归组装该菜单的子菜单(children)。
 *
 * @param menus 菜单数组
 * @returns 转换的路由集合
 */
export function mapMenusToRoutes(menus: IMenu[]) {
  return menus
    .filter((item) => item.type === 1 && item.path)
    .map((item) => {
      return {
        key: item.id,
        index: item.home,
        path: item.path,
        element: createRouteElement(item),
        nodeRef: createRef(),
        meta: {
          title: item.title,
        },
      } as IRoute;
    });
}

/**
 * 合并路由。如果源路由集合中路由的path与parentPath相同,则会将
 * 新路由集合合并至对应路由元素的children属性,否则直接合并源路由集合
 * 和新路由集合。
 *
 * @param routes 源路由集合
 * @param newRoutes 新路由集合
 * @param parentPath 合并路由的父路径
 * @returns 合并之后的路由集合
 */
export function mergeRoutes(
  routes: IRoute[],
  newRoutes: IRoute[],
  parentPath: string = '/',
): IRoute[] {
  if (newRoutes.length === 0) return routes;
  if (!parentPath) return routes.concat(newRoutes);
  return routes.map((item) => {
    if (item.path === parentPath) {
      return {
        ...item,
        children: newRoutes.concat(item.children || []),
      };
    }
    return item;
  });
}

export function createElement(lazyComponent: LazyComponent) {
  return React.createElement(React.lazy(lazyComponent));
}
