import React from "react";
import { createBrowserRouter, redirect, Navigate } from "react-router-dom";
import loadable from "@loadable/component";
import sysRouter from "./sys";
import dashboardRouter from "./dashboard";

const AppLayout = loadable(() => import("@/layouts"));
const Login = loadable(() => import("@/views/login"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(AppLayout),
    children: [...dashboardRouter, ...sysRouter],
  },
  {
    path: "/login",
    element: React.createElement(Login),
    async action({ request, params }) {
      console.log("asdasd");
      return redirect("/dashboard/analysis");
    },
  },
]);
