import React, { useRef } from 'react';
import { Provider, State } from './context';
import TableHeader from './components/header';
import TableContainer from './components/TableContainer';
import type { TableProProps } from './types';

function TablePro(props: TableProProps) {
  const tableRef = useRef<HTMLDivElement>(null);
  return (
    <Provider value={{ ...props, tableRef } as State}>
      <div className="px-10 pt-10 h-full" ref={tableRef}>
        <TableHeader />
        <TableContainer {...props} />
      </div>
    </Provider>
  );
}

export default TablePro;
