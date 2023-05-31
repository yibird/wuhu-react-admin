import React, { Suspense } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { useLoadRoutes } from "@/router";
import { ConfigProvider } from "antd";
import { useAppStore } from "@/store";

import AuthRoute from "@/router/AuthRoute";
import { eq } from "lodash-es";

const AppRoutes = React.memo(function () {
  console.log("1111");
  const routes = useLoadRoutes();
  return <AuthRoute>{useRoutes(routes)}</AuthRoute>;
});

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
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
