import React, { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "@/styles/transition/page.css";
import { useAppStore } from "@/store";
import { eq } from "lodash-es";
import clsx from "clsx";

function LayoutContent() {
  const location = useLocation();
  const nodeRef = useRef(null);
  const { enableAnimation, animationType } = useAppStore(
    (state) => state.animation,
    eq
  );
  const animationCls = clsx({ [animationType]: enableAnimation });

  return (
    <div className="relative flex-1 p-10 overflow-y-auto overflow-x-hidden">
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames={animationCls}
          unmountOnExit
        >
          <div ref={nodeRef} className={`w-full ${animationCls}`}>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default LayoutContent;
