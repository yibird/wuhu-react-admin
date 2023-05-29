import React, { Suspense } from "react";
import { useRoutes, useLocation, matchRoutes } from "react-router-dom";
import { useLoadRoutes } from "@/router";
import { ConfigProvider } from "antd";
import { useAppStore } from "@/store";

import AuthRoute from "@/router/AuthRoute";
import { eq } from "lodash-es";

function AppRoutes() {
  const routes = useLoadRoutes();
  return <AuthRoute>{useRoutes(routes)}</AuthRoute>;
}

function App() {
  const themeColor = useAppStore((state) => state.themeColor, eq);
  const theme = {
    token: {
      colorPrimary: themeColor,
      borderRadius: 2,
    },
  };
  return (
    <ConfigProvider theme={theme}>
      <AppRoutes />
    </ConfigProvider>
  );
}

export default App;
