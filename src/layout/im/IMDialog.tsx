import React from 'react';
import { createPortal } from 'react-dom';

import { IMSider, IMHeader, IMContent } from './components';

import type { IMDialogProps } from './types';

function IMDialog({ open, width = '70%', height = '70%', zIndex }: IMDialogProps) {
  return (
    <div
      className="fixed-center overflow-hidden shadow-down-2"
      style={{
        zIndex,
        width: 1000,
        height: 620,
        visibility: open ? 'visible' : 'collapse',
      }}
    >
      <div className={`full flex rounded-6 bg-white ${open ? 'zoom-in' : 'zoom-out'}`}>
        <IMSider />
        <div className="flex-1 full flex flex-col overflow-hidden">
          <IMHeader />
          <IMContent />
        </div>
      </div>
    </div>
  );
}

const el = document.body;
export default (props: IMDialogProps) => createPortal(<IMDialog {...props} />, el);
