import { useEffect, useState } from "react";
import { defaultRoutes } from "@/router/routes";
import { mapMenusToRoutes, mergeRoutes } from "../help";
import { RouteObject } from "react-router-dom";
import { useMount } from "ahooks";
import { useStoreSelector } from "@/store";

/**
 * 加载路由hooks
 */
export function useLoadRoutes() {
  // 获取默认路由
  const [routes, setRoutes] = useState<RouteObject[]>(defaultRoutes);
  const { serverMenus, flatMenus, setServerMenus } =
    useStoreSelector.usePermission();

  useMount(() => setServerMenus());
  useEffect(() => {
    setRoutes(mergeRoutes(routes, mapMenusToRoutes(flatMenus), "/"));
  }, [serverMenus]);
  return routes;
}
