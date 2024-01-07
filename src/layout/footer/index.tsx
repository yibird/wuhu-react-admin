import React from 'react';
import { useAppStore } from '@/store';

function LayoutFooter() {
  const { showFooter } = useAppStore((state) => state.app);
  if (!showFooter) return;
  return <div className="py-10 text-center">footer</div>;
}

export default LayoutFooter;
