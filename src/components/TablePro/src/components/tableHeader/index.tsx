import React from 'react';
import TableTitle from '../tableTitle';
import TableAction from '../tableAction';

import { TableHeaderProps } from '../../types';
import { isBool } from '@/utils/is';

function TableHeader({ header = true }: TableHeaderProps) {
  if (typeof header === 'object') return <header />;
  if (isBool(header) && !header) return null;
  return (
    <div className="table-header flex-y-center justify-between py-10 px-20">
      <TableTitle />
      <TableAction />
    </div>
  );
}

export default TableHeader;
