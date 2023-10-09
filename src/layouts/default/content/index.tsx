import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '@/styles/transition/page.css';
import { useAppStore } from '@/store';
import clsx from 'clsx';

function LayoutContent() {
  const nodeRef = useRef(null);
  const { enableAnimation, animationType } = useAppStore((state) => state.animation);
  const animationCls = clsx({ [animationType]: enableAnimation });

  return (
    <div className="relative overflow-hidden" style={{ height: 'calc(100% - 90px)' }}>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={200}
          classNames={animationCls}
          unmountOnExit
        >
          <div ref={nodeRef} className={`relative w-full h-full text-[#333] ${animationCls}`}>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default LayoutContent;
