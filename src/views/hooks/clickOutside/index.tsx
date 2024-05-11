import React, { useRef, Suspense, lazy } from 'react';
import { useClickOutside } from '@/hooks/dom/useClickOutside';
import { Button } from '@/components';
import { Routes, Route } from 'react-router-dom';

function Test() {
  return <div>123123</div>;
}

const TestWrapper = lazy<() => JSX.Element>(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('@/views/comp/button'));
    }, 2000);
  });
});

export default function ClickOutsideComp() {
  const ref = useRef<HTMLDivElement>(null);
  const outside = useClickOutside(ref, () => {});
  return (
    <div>
      <div style={{ width: 200, height: 200, border: '1px solid red' }} ref={ref}>
        {outside ? 'true' : 'false'}
      </div>
      <Button>请求</Button>
      <Suspense fallback={<div>loading...</div>}>
        <TestWrapper />
        <Routes>
          <Route element={() => import('@/views/comp/button')} />
        </Routes>
      </Suspense>
    </div>
  );
}
