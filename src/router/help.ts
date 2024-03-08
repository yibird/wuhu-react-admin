import React, { createRef } from 'react';
import { IMenuItem } from '@/common/menus';
import loadable from '@loadable/component';
import { Component, IRoute } from './types';
import { KeepAlive, type KeepAliveProps } from 'react-activation';

const modules = import.meta.glob('../views/**/*.tsx') as Record<string, Component>;

function getViewPath(path: string, prefix: string = '../views', suffix = 'index.tsx') {
  path = path.replace(/^\/|\/$/g, '');
  return `${prefix}/${path}/${suffix}`;
}

/**
 * 从modules中根据path加载路由元素
 * @param modules 模块对象
 * @param path 组件path
 * @returns 路由元素
 */
function loadRoute(modules: Record<string, Component>, item: IMenuItem) {
  const path = getViewPath(item.path!);
  const children = React.createElement(loadable(modules[path]));
  const props = { cacheKey: `cacheKey_${item.id}` } as KeepAliveProps;
  return React.createElement(KeepAlive, props, children);
}

/**
 * 菜单集合转路由集合。如果菜单类型为菜单项(type=2),则组装路由返回,
 * 如果菜单类型为目录菜单(type=1),则递归组装该菜单的子菜单(children)。
 * @param menus 菜单
 * @returns 转换的路由集合
 */
export function mapMenusToRoutes(menus: IMenuItem[]) {
  return menus
    .filter((item) => item.type === 2 && item.path)
    .map((item) => {
      return {
        key: item.id,
        path: item.path,
        element: loadRoute(modules, item),
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
 * @param routes 源路由集合
 * @param newRoutes 新路由集合
 * @param parentPath 合并路由的父路径
 * @returns 合并之后的路由集合
 */
export function mergeRoutes(routes: IRoute[], newRoutes: IRoute[], parentPath: string = '') {
  if (newRoutes.length === 0) return routes;
  if (!parentPath) return [...routes, ...newRoutes];
  return routes.map((item) => {
    return item.path === parentPath
      ? { ...item, children: [...newRoutes, ...item.children!] }
      : item;
  }) as IRoute[];
}
