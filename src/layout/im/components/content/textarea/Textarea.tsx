import React, { useRef } from 'react';
import type { TextareaProps } from '../types';

export default function Textarea({ onEnter }: TextareaProps) {
  const [focus, setFocus] = React.useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  function handleFocus() {
    if (!inputRef.current) return;
    const content = inputRef.current.innerHTML;
    if (!content && !focus) {
      setFocus(true);
      inputRef.current.focus();
    }
  }

  const handleInput: React.FormEventHandler<HTMLDivElement> = (e) => {
    const el = e.nativeEvent.target as HTMLElement;
    setFocus(!!el.innerHTML);
  };

  const handleBlur: React.FocusEventHandler<HTMLDivElement> = (e) => {
    const el = e.nativeEvent.target as HTMLElement;
    if (!el.innerHTML && focus) {
      setFocus(false);
    }
  };

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
    <div className="relative min-w-0 flex-1 px-15" style={{ overflowWrap: 'break-word' }}>
      <div className="py-14">
        <div
          ref={inputRef}
          onInput={handleInput}
          onKeyDown={handlleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          contentEditable
          className="max-h-200 outline-none overflow-x-auto"
        ></div>
      </div>
      {!focus && (
        <div
          onClick={handleFocus}
          className="absolute-y-center full flex-y-center box-border text-gray-400 text-sm"
        >
          Enter发送消息,Esc退出窗口
        </div>
      )}
    </div>
  );
}
