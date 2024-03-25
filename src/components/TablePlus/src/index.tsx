import React from 'react';
import { Provider, useSharedState } from './context';
import TableHeader from './components/header';
import TableContent from './components/content';
import type { TablePlusProps } from './types';
import { defaultProps } from './common';
import clsx from 'clsx';

function Table() {
  const [{ full }] = useSharedState();
  const classes = clsx('full flex flex-col px-10', {
    'fixed left-0 top-0 z-1000 bg-white': full,
  });
  return (
    <div className={classes}>
      <TableHeader />
      <TableContent />
    </div>
  );
}
export default function TablePlus(props: TablePlusProps) {
  return (
    <Provider value={{ ...defaultProps, ...props }}>
      <Table />
    </Provider>
  );
}
