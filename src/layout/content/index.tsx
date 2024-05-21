import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { useMatchRoute, useSharedState } from '@/router';
import { Loading } from '@/components';

export default function LayoutContent() {
  const { enableAnimation, animationType } = useAppStore((state) => state.animation, shallow);
  const animationClass = enableAnimation ? animationType : '';

  const [routes] = useSharedState(),
    route = useMatchRoute(routes);
  if (!route) return;

  return (
    <div className="flex-1 relative overflow-hidden dark:bg-slate-800">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={location.pathname}
          nodeRef={route.nodeRef}
          timeout={300}
          classNames={animationClass}
          unmountOnExit
        >
          <div ref={route.nodeRef} className={`full absolute ${animationClass}`}>
            <React.Suspense fallback={<Loading loading />}>
              <Outlet />
            </React.Suspense>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
