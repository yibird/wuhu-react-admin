import React from "react";
import { useRoutes } from "react-router-dom";
import { useLoadRoutes } from "./router";
import { ConfigProvider } from "antd";
import { useStore } from "@/store";

function App() {
  const { themeColor } = useStore((state) => state);
  const routes = useLoadRoutes();

  const theme = {
    token: {
      colorPrimary: themeColor,
      borderRadius: 2,
    },
  };
  return <ConfigProvider theme={theme}>{useRoutes(routes)}</ConfigProvider>;
}

export default App;
