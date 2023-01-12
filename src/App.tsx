import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ConfigProvider } from "antd";
import { useStore } from "@/store";

function App() {
  const { themeColor } = useStore((state) => state);
  const theme = {
    token: {
      colorPrimary: themeColor,
      borderRadius: 2,
    },
  };
  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
