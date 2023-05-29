import { useEffect, useState } from "react";
import { defaultRoutes } from "@/router/routes";
import { mapMenusToRoutes, mergeRoutes } from "../help";
import { usePermissionStore } from "@/store";
import { IMenuItem } from "@/common/menus";
import { eq } from "lodash-es";
import type { IRoute } from "@/router";

/**
 * 加载路由hooks
 */
export function useLoadRoutes() {
  const menus = usePermissionStore().flatMenus;
  // 获取默认路由
  const [routes, setRoutes] = useState<IRoute[]>(defaultRoutes);
  return mergeRoutes(routes, mapMenusToRoutes(menus), "/");
}
