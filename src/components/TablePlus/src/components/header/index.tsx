import React from 'react';
import TableHeaderTitle from './title';
import TableHeaderAction from './action';
import TableHeaderToolbar from './toolbar';

import { useSharedState } from '../../context';

export default function TableHeader() {
  const [{ header }] = useSharedState();
  if (typeof header === 'boolean' && !header) return;
  if (typeof header === 'object' && !header) return header;

  return (
    <div className="table-header flex justify-between items-center py-10">
      <TableHeaderTitle />
      <TableHeaderAction />
      <TableHeaderToolbar />
    </div>
  );
}
