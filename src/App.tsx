import React from "react";
import { useRoutes, useLocation, matchRoutes } from "react-router-dom";
import { useLoadRoutes } from "@/router";
import { ConfigProvider } from "antd";
import { useStoreSelector } from "@/store";
import { eq } from "lodash-es";
import AuthRoute from "@/router/AuthRoute";

function AppRoutes() {
  const routes = useLoadRoutes();
  return <AuthRoute>{useRoutes(routes)}</AuthRoute>;
}

function App() {
  const themeColor = useStoreSelector((state) => state.app.themeColor, eq);
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
