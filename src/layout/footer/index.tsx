import React from 'react';
import { useAppStore } from '@/store';

function LayoutFooter() {
  const showFooter = useAppStore().showFooter;
  if (!showFooter) return null;
  return <div>footer</div>;
}

export default LayoutFooter;
