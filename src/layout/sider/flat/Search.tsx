import React, { ChangeEvent, useMemo, useRef, useState } from 'react';
import { Icon } from '@/components';
import clsx from 'clsx';

interface Props {
  collapsed?: boolean;
  onSearch?: (value: string) => void;
}

export default function Search({ collapsed = false, onSearch }: Props) {
  const classes = clsx(
    'inline-flex items-center bg-black h-40 box-border rounded-4 overflow-hidden transition-all transition-duration-300 transition-delay-50',
    {
      'relative flex w-40': collapsed,
    },
  );
  const searchClasses = clsx('px-10', {
    'absolute w-full flex items-center justify-center bg-inherit z-1': collapsed,
  });
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    onSearch && onSearch(val);
  };

  const handleClear = () => {
    if (!inputRef.current) return;
    const val = '';
    setValue(val);
    inputRef.current.value = val;
    inputRef.current.focus();
    onSearch && onSearch(val);
  };

  return (
    <div className="py-10 text-center text-white">
      <div className={classes}>
        <span className={searchClasses}>
          <Icon name="search-line" />
        </span>
        <div className="relative flex">
          <input
            ref={inputRef}
            onChange={handleChange}
            className="h-full w-120 mr-24 outline-none border-none bg-transparent text-xs text-white"
          />
          {value.length > 0 && (
            <span className="absolute right-5 absolute-y-center">
              <Icon onClick={handleClear} name="close-line" size={20} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
