import React, { useDeferredValue, useMemo, useState } from 'react';
import { Icon } from '@/components';

export default function Search() {
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  const showClear = useMemo(() => value.length > 0, [value]);

  const handleChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    const el = e.nativeEvent.target as HTMLInputElement;
    setValue(el.value);
  };
  const handleClear = () => {
    setValue('');
  };

  return (
    <div className="h-56 flex items-center box-border b-b-f2">
      <div className="relative flex-y-center w-full mx-10 b-e8 box-border">
        <input
          onChange={handleChange}
          value={value}
          className="w-full h-36 px-12 bg-white text-sm box-border border-none rounded-2 outline-none transition-all focus:rounded-20"
          placeholder="请输入搜索内容"
        />
        {showClear && (
          <span onClick={handleClear}>
            <Icon name="close-circle-fill" className="mr-5 text-[#999] hover:text-red-6" />
          </span>
        )}
      </div>
    </div>
  );
}
