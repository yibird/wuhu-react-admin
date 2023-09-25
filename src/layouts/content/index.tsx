import React, { useState, useRef, createRef } from "react";
import { Outlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./index.css";
import { useStoreSelector } from "@/store";
import { eq } from "lodash-es";
import { useLocation } from "react-router-dom";
import { useLoadRoutes } from "@/router/hooks/useLoadRoutes";

function LayoutContent() {
  const location = useLocation();
  return (
    <div className="relative flex-1 p-10 overflow-y-auto overflow-x-hidden">
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          {(state) => (
            <div className="page">
              <Outlet />
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default LayoutContent;
