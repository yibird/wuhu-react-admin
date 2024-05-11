import React from 'react';
import { Icon } from '@/components';

export default function Search() {
  return (
    <div className="h-56 flex items-center box-border b-b-f2">
      <div className="relative flex-y-center w-full mx-10 b-e8 box-border">
        <input
          className="w-full h-36 px-12 bg-white text-sm box-border border-none rounded-2 outline-none transition-all focus:rounded-20"
          placeholder="请输入搜索内容"
        />
        <Icon name="close-circle-fill" className="mr-5 text-[#999] hover:text-red" />
      </div>
    </div>
  );
}
