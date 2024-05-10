import React from 'react';
import Search from './Search';
import SessionList from './SessionList';

export default function SiderContent() {
  return (
    <div className="flex-1 box-border" style={{ borderInline: '1px solid #f2f2f2' }}>
      <Search />
      <SessionList />
    </div>
  );
}
