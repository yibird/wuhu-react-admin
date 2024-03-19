import React, { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import KeepAlive from 'react-activation';
import { useAppStore, usePermissionStore } from '@/store';
import { shallow } from 'zustand/shallow';

function LayoutContent() {
  const routes = usePermissionStore((state) => state.routes);
  const { enableAnimation, animationType } = useAppStore((state) => state.animation, shallow);
  const animationClass = enableAnimation ? animationType : '';
  const location = useLocation();

  const route = useMemo(
    () => routes.find((item) => item.path === location.pathname)!,
    [location.pathname, routes],
  );
  if (!route) return;

  return (
    <div className="relative overflow-hidden z-10" style={{ height: 'calc(100% - 90px)' }}>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={location.pathname}
          nodeRef={route.nodeRef}
          timeout={300}
          classNames={animationClass}
          unmountOnExit
        >
          <div ref={route.nodeRef} className={`full absolute ${animationClass}`}>
            <div className="full">
              <Outlet />
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default LayoutContent;
