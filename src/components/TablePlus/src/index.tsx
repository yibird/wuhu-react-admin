import React from 'react';
import { Provider } from './context';
import TabelHeader from './components/header';
import TableContent from './components/content';
import type { TablePlusProps } from './types';
import { defaultProps } from './common';

export default function TablePlus(props: TablePlusProps) {
  return (
    <div className="full flex flex-col px-10">
      <Provider value={{ ...defaultProps, ...props }}>
        <TabelHeader />
        <TableContent />
      </Provider>
    </div>
  );
}
