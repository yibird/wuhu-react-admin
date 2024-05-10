import React from 'react';
import SiderBar from './SiderBar';
import SiderContent from './content';

export default function IMSider() {
  return (
    <div className="w-300 min-w-300 max-w-300 overflow-hidden h-full flex">
      <SiderBar />
      <SiderContent />
    </div>
  );
}
