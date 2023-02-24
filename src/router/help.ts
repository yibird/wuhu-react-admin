import { createElement } from "react";
import { IMenuItem } from "@/common/menus";
import { RouteObject } from "react-router-dom";
import loadable from "@loadable/component";
import { Component } from "./types";

const modules = import.meta.glob("../views/**/*.tsx") as Record<
  string,
  Component
>;

function getViewPath(
  path: string,
  prefix: string = "../views",
  suffix = "index.tsx"
) {
  return `${prefix}/${path.startsWith("/") ? path.slice(1) : path}/${suffix}`;
}

/**
 * 从modules中根据path加载路由元素
 * @param modules 模块对象
 * @param path 组件path
 * @returns 路由元素
 */
function loadRoute(modules: Record<string, Component>, path: string) {
  return createElement(loadable(modules[path]));
}

/**
 * 菜单集合转路由集合。如果菜单类型为菜单项(type=2),则组装路由返回,
 * 如果菜单类型为目录菜单(type=1),则递归组装该菜单的子菜单(children)。
 * @param menus 菜单
 * @returns 转换的路由集合
 */
export function mapMenusToRoutes(menus: IMenuItem[]): RouteObject[] {
  return menus
    .filter((item) => item.type === 2 && item.path)
    .map(({ path }) => {
      return {
        path,
        element: loadRoute(modules, getViewPath(path!)),
      } as RouteObject;
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
export function mergeRoutes(
  routes: RouteObject[],
  newRoutes: RouteObject[],
  parentPath: string = ""
): RouteObject[] {
  for (let i = 0, len = routes.length; i < len; i++) {
    if (routes[i].path === parentPath) {
      routes[i].children?.push(...newRoutes);
      return routes;
    }
  }
  return routes.concat(newRoutes);
}
