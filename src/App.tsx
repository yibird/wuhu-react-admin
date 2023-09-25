import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./router";
import { ConfigProvider } from "antd";
import { useAppStore } from "@/store";

function App() {
  const { themeColor } = useAppStore();
  const theme = {
    token: {
      colorPrimary: themeColor,
      borderRadius: 2,
    },
  };
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
