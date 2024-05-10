import React, { useMemo } from 'react';
import { Outlet, useLocation, matchRoutes, RouteObject } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useAppStore, usePermissionStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { IRoute, useSharedState } from '@/router';

export default function LayoutContent() {
  const { enableAnimation, animationType } = useAppStore((state) => state.animation, shallow);
  const animationClass = enableAnimation ? animationType : '';
  const location = useLocation();

  const [routes] = useSharedState();
  const currentRoutes = matchRoutes(routes as RouteObject[], location);
  const route = currentRoutes?.at(-1)?.route as IRoute;

  if (!route) return;
  return (
    <div className="relative overflow-hidden" style={{ height: 'calc(100% - 90px)' }}>
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
