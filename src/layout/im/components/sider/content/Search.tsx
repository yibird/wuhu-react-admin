import React from 'react';

export default function Search() {
  return (
    <div className="h-50 flex items-center box-border">
      <div className="relative w-full mx-10 box-border">
        <input
          style={{
            border: '1px solid #e8e8e8',
          }}
          className="w-full h-36 px-12 bg-white text-sm box-border border-none rounded-2 outline-none transition-all focus:rounded-20"
          placeholder="请输入搜索内容"
        />
      </div>
    </div>
  );
}
