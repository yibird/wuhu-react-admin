import React from 'react';
import { Layout } from 'antd';
import { useLocation, useOutlet } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { useMatchRoute, useSharedState } from '@/router';
import { Loading } from '@/components';

export default function LayoutContent() {
  const location = useLocation();
  const outlet = useOutlet();
  const { enableAnimation, animationType } = useAppStore((state) => state.animation, shallow);
  const animationClass = enableAnimation ? animationType : '';

  const [routes] = useSharedState(),
    route = useMatchRoute(routes);
  if (!route) return outlet;

  return (
    <Layout.Content className="flex-1 relative overflow-hidden">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={location.pathname}
          nodeRef={route.nodeRef}
          timeout={300}
          classNames={animationClass}
          unmountOnExit
          mountOnEnter
        >
          <div ref={route.nodeRef} className={`full absolute ${animationClass}`}>
            <React.Suspense fallback={<Loading loading />}>{outlet}</React.Suspense>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </Layout.Content>
  );
}
