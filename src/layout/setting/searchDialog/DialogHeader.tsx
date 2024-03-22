import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Icon } from '@/components';
import { debounce } from 'lodash-es';
import type { DialogHeaderProps, DialogHeaderRef } from './types';
import { useHotkeys } from 'react-hotkeys-hook';

export default forwardRef<DialogHeaderRef, DialogHeaderProps>(
  ({ initialValue, onClose, onChange, onClear }, ref) => {
    const [value, setValue] = useState(initialValue || '');
    const inputRef = useRef<HTMLInputElement>(null),
      showClose = value.trim().length > 0;

    const changeValue = debounce((value: string, isTrigger = true) => {
      setValue(value);
      isTrigger && onChange && onChange(value);
    }, 20);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      changeValue(e.target.value);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.code === 'Escape') {
        e.preventDefault();
        onClose && onClose();
      }
    };

    const handleClear = () => {
      if (!inputRef.current) return;
      changeValue('', false);
      onClear && onClear();
    };

    useImperativeHandle(ref, () => {
      return {
        setValue(value) {
          changeValue(value, false);
        },
        focus() {
          inputRef.current?.focus();
        },
      };
    });

    return (
      <div className="w-full h-42 flex justify-between items-center px-15 box-border">
        <input
          ref={inputRef}
          value={value}
          className="flex-1 m-0 pr-15 box-border rounded-e-10 outline-none border-none selection:bg-[#ff69b4] 
          selection:text-white placeholder:text-slate-400"
          placeholder="请输入搜索内容"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {showClose && (
          <Icon
            name="close-circle-fill"
            size={20}
            color="#999"
            className="hover:text-black!"
            onClick={handleClear}
          />
        )}
      </div>
    );
  },
);
