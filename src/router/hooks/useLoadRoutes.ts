import { useEffect, useState } from "react";
import { defaultRoutes } from "@/router/routes";
import { mapMenusToRoutes, mergeRoutes } from "../help";
import { RouteObject } from "react-router-dom";
import { useMount } from "ahooks";
import { useStoreSelector } from "@/store";
import { IMenuItem } from "@/common/menus";

/**
 * 加载路由hooks
 */
export function useLoadRoutes(menus: IMenuItem[]) {
  // 获取默认路由
  const [routes, setRoutes] = useState<RouteObject[]>(defaultRoutes);
  return mergeRoutes(routes, mapMenusToRoutes(menus), "/");
}
