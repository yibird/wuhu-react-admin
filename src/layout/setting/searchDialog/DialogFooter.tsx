import React from 'react';
import type { DialogFooterProps } from './types';

export default function DialogFooter({ footer, footerStyle }: DialogFooterProps) {
  if (!footer) return;
  return (
    <div className="flex justify-between py-10 px-10" style={footerStyle}>
      {footer}
    </div>
  );
}
