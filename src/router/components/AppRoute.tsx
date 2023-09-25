import React from "react";
import { useRoutes } from "react-router-dom";

import { usePermissionStore } from "@/store";
import { useLoadRoutes } from "../hooks/useLoadRoutes";

export function AppRoute() {
  const { flatMenus, serverMenus } = usePermissionStore();
  const routes = useLoadRoutes(flatMenus);
  return useRoutes(routes);
}
