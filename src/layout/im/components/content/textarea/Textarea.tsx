import React from 'react';
import type { TextareaProps } from '../types';

export default function Textarea({ onEnter }: TextareaProps) {
  const handlleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const el = e.nativeEvent.target as HTMLElement;
      const html = el.innerHTML;
      if (!html.trim()) return;
      onEnter && onEnter(html);
      el.innerHTML = '';
    }
  };

  return (
    <div className="min-w-0 flex-1 px-15 py-12" style={{ overflowWrap: 'break-word' }}>
      <div
        onKeyDown={handlleKeyDown}
        contentEditable
        className="max-h-200 outline-none overflow-x-auto transition-all
              group-focus:bg-white
              has-[:focus]:bg-red"
      ></div>
    </div>
  );
}
