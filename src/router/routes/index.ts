import React from "react";
import { RouteObject } from "react-router-dom";
import loadable from "@loadable/component";
// import sysRouter from "./sys";
import dashboardRouter from "./dashboard";

const AppLayout = loadable(() => import("@/layouts"));
const Login = loadable(() => import("@/views/login"));

export const defaultRoutes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(AppLayout),
    children: [...dashboardRouter],
  },
  {
    path: "/login",
    element: React.createElement(Login),
  },
];
