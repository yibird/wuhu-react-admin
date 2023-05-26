import React from "react";
import { RouteObject, Navigate } from "react-router-dom";
import loadable from "@loadable/component";

export const defaultRoutes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(loadable(() => import("@/layout"))),
    children: [
      {
        index: true,
        element: React.createElement(Navigate, { to: "/dashboard/analysis" }),
      },
      {
        path: "*",
        element: React.createElement(
          loadable(() => import("@/views/exception/notFound"))
        ),
      },
    ],
  },
  {
    path: "/login",
    element: React.createElement(loadable(() => import("@/views/login"))),
  },
  {
    path: "*",
    element: React.createElement(
      loadable(() => import("@/views/exception/notFound"))
    ),
  },
];
