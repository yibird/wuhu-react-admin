import React from "react";
import { useRoutes } from "react-router-dom";
import { useLoadRoutes } from "./router";
import { ConfigProvider } from "antd";
import { useStoreSelector } from "@/store";
import { eq } from "lodash-es";

function AppRoutes() {
  const menus = useStoreSelector((state) => state.permission.flatMenus, eq);
  const routes = useLoadRoutes(menus);
  return useRoutes(routes);
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
