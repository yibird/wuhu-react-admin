import React, { useEffect, PropsWithChildren } from "react";
import { useLocation, matchRoutes, useNavigate } from "react-router-dom";
import { useLoadRoutes } from "@/router";
import { useTitle } from "@/hooks/web/useTitle";

const AuthRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const routes = useLoadRoutes();
  const mathchs = matchRoutes(routes, location);

  const { setTitle } = useTitle("");

  const isExist = mathchs?.some((item) => item.pathname == location.pathname);
  useEffect(() => {
    if (!isExist) {
      console.log("路由不存在...");
      return;
    }
    const mathch = (mathchs || []).at(-1);
    if (!mathch || mathch?.route.path === "*") {
      console.log("匹配404");
      return;
    }
    const { title = "" } = mathch.route.meta!;
    title && setTitle(title!);

    // console.log(mathch);
    if (mathch.pathname === "/login") {
      navigate(-1);
      return;
    }
  }, [location]);
  if (typeof children === "undefined") return null;
  return <>{children}</>;
};

export default AuthRoute;
