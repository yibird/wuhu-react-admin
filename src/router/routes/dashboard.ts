import React, { createElement } from "react";
import { RouteObject, Navigate } from "react-router-dom";
import loadable from "@loadable/component";

const dashboardRouter: RouteObject[] = [
  {
    index: true,
    element: React.createElement(Navigate, { to: "/dashboard/analysis" }),
  },
  {
    path: "dashboard/analysis",
    element: createElement(
      loadable(() => import("@/views/dashboard/analysis"))
    ),
  },
  {
    path: "dashboard/workbench",
    element: createElement(
      loadable(() => import("@/views/dashboard/workbench"))
    ),
  },
];
export default dashboardRouter;
