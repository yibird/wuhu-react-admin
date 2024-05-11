import React from 'react';
import Search from './Search';
import SessionList from './SessionList';

export default function SiderContent() {
  return (
    <div className="flex-1 box-border b-x-f2">
      <Search />
      <SessionList />
    </div>
  );
}
