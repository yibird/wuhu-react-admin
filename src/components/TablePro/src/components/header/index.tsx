import React from 'react';
import TableTitle from './TableTitle';
import TableAction from './TableAction';
import TableToolbar from './toolbar';
import { useSharedState } from '../../context';
import { isBool, isObject } from '@/utils/is';

function TableHeader() {
  const [{ header }] = useSharedState();
  if (isBool(header) && !header) return;
  if (isObject(header)) return <header />;

  return (
    <div className="table-header flex-y-center py-10">
      <TableTitle />
      <TableAction />
      <TableToolbar />
    </div>
  );
}
export default TableHeader;
