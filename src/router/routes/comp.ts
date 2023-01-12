import React, { createElement } from "react";
import { RouteObject } from "react-router-dom";
import loadable from "@loadable/component";

const compRouter: RouteObject[] = [
  {
    path: "/comp/watermark",
    element: createElement(loadable(() => import("@/views/comp/watermark"))),
  },
];

export default compRouter;
