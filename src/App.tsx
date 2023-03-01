import React from "react";
import { useRoutes } from "react-router-dom";
import { useLoadRoutes } from "./router";
import { ConfigProvider } from "antd";
import { useStoreSelector } from "@/store";
import _ from "lodash-es";
function App() {
  const themeColor = useStoreSelector((state) => state.app.themeColor, _.eq);
  const routes = useLoadRoutes();
  const theme = {
    token: {
      colorPrimary: themeColor,
      borderRadius: 2,
    },
  };

  return <ConfigProvider theme={theme}>{useRoutes(routes)}</ConfigProvider>;
}

export default React.memo(App);
