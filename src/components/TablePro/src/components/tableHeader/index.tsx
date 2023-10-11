import React from 'react';
import TableTitle from './TableTitle';
import TableAction from './TableAction';

import { useSharedState } from '../../context';
import { isBool, isObject } from '@/utils/is';

function TableHeader() {
  const [{ header }] = useSharedState();
  if (isBool(header) && !header) return;
  if (isObject(header)) return <header />;
  return (
    <div className="table-header flex-y-center justify-between py-10 px-20">
      <TableTitle />
      <TableAction />
    </div>
  );
}

export default TableHeader;
