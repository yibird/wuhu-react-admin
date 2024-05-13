import React from 'react';
import { createPortal } from 'react-dom';
import { IMSider, IMHeader, IMContent } from './components';
import type { IMDialogProps } from './types';

function IMDialog({ open, width = '70%', height = '70%', zIndex }: IMDialogProps) {
  return (
    <div
      className="fixed-center"
      style={{
        zIndex,
        width,
        height,
        visibility: open ? 'visible' : 'collapse',
      }}
    >
      <div className={`relative full ${open ? 'zoom-in' : 'zoom-out'}`}>
        <div className="full flex bg-white shadow-down-2 rounded-6">
          <IMSider />
          <div className="flex-1 full flex flex-col overflow-hidden">
            <IMHeader />
            <IMContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default (props: IMDialogProps) => createPortal(<IMDialog {...props} />, document.body);
