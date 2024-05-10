import React from 'react';
import Textarea from './Textarea';
import ActionBar from './ActionBar';

import type { MessageTextarea } from '../types';

export default function MessageTextarea({ onEnter }: MessageTextarea) {
  return (
    <div className="px-20 py-15 w-full box-border">
      <div
        style={{ border: '1px solid #f2f2f2' }}
        className="group min-h-45 w-full overflow-hidden flex bg-white text-black rounded-8 box-border shadow-down-2"
      >
        <Textarea onEnter={onEnter} />
        <ActionBar />
      </div>
    </div>
  );
}
