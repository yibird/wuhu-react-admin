import React, { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import KeepAlive from 'react-activation';
import { useAppStore, usePermissionStore } from '@/store';
import { shallow } from 'zustand/shallow';
import '@/styles/transition/index.css';

function LayoutContent() {
  const routes = usePermissionStore((state) => state.routes);
  const { enableAnimation, animationType } = useAppStore((state) => state.animation, shallow);
  const classNames = enableAnimation ? animationType : '';
  const location = useLocation();

  const route = useMemo(() => {
    return routes.find((item) => item.path === location.pathname)!;
  }, [location.pathname, routes]);
  if (!route) return;

  return (
    <div className="relative overflow-hidden z-10" style={{ height: 'calc(100% - 90px)' }}>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={location.pathname}
          nodeRef={route.nodeRef}
          timeout={200}
          classNames={classNames}
          unmountOnExit
        >
          <div ref={route.nodeRef} className={`relative full`}>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default LayoutContent;
