import React, { useEffect, PropsWithChildren } from "react";
import { useLocation, matchRoutes, Route } from "react-router-dom";
import { useLoadRoutes } from "@/router";

const AuthRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const routes = useLoadRoutes();
  const mathchs = matchRoutes(routes, location);

  const isExist = mathchs?.some((item) => item.pathname == location.pathname);
  useEffect(() => {
    if (!isExist) {
      console.log("路由不存在...");
      return;
    }
    const mathch = (mathchs || []).at(-1);
    if (mathch?.route.path === "*") {
      console.log("匹配404");
      return;
    }
  }, [location]);
  if (typeof children === "undefined") return null;
  return <>{children}</>;
};

export default AuthRoute;
