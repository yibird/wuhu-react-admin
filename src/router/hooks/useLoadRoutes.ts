import { useEffect, useState } from "react";
import { defaultRoutes } from "@/router/routes";
import { useStore } from "@/store";
import { mapMenusToRoutes, mergeRoutes } from "../help";
import { RouteObject } from "react-router-dom";
import { useMount } from "ahooks";
/**
 * 加载路由hooks
 */
export function useLoadRoutes() {
  // 获取默认路由
  const [routes, setRoutes] = useState<RouteObject[]>(defaultRoutes);
  const { serverMenus, setServerMenus, flatMenus } = useStore((state) => state);
  useMount(() => setServerMenus());
  useEffect(() => {
    const menus = serverMenus.filter((item) => [1, 2].includes(item.type));
    const newRoutes = mapMenusToRoutes(flatMenus);
    setRoutes(mergeRoutes(routes, newRoutes, "/"));
  }, [serverMenus]);
  return routes;
}
