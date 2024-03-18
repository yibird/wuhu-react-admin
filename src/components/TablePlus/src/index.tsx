import React from 'react';
import { Provider, State } from './context';
import TabelHeader from './components/header';
import TableContent from './components/content';
import type { TablePlusProps } from './types';

const defaultProps: TablePlusProps = {
  header: true,
  title: true,
  action: true,
  actionPosition: 'right',

  rowSelection: true,
  pagination: true,

  enableSelectionColumn: true,
  enableIndexColumn: true,

  size: 'small',
  bordered: true,
  stripe: true,
};

export default function TablePlus(props: TablePlusProps) {
  props = Object.assign(defaultProps, props);

  return (
    <div className="px-10 h-full">
      <Provider value={props}>
        <TabelHeader />
        <TableContent />
      </Provider>
    </div>
  );
}
