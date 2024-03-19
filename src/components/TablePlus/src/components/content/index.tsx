import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Table } from 'antd';
import { useSharedState } from '../../context';
import { isFunc } from '@/utils/is';
import type { Column, RowSelection } from '../../types';
import { compact } from 'lodash-es';
import { useScroll } from '../../hooks';
import {
  columnOption,
  rowSelectionOption,
  indexColumnOption,
  operationColumnOption,
  paginationOption,
} from '@/components/TablePlus/src/common';

export default function TableContent() {
  const [
    {
      columns = [],
      dataSource,
      rowSelection,
      rowClassName,
      enableSelectionColumn,
      enableIndexColumn,
      pagination = true,
      size,
      bordered,
      stripe,
    },
  ] = useSharedState();
  const tbodyRef = useRef<HTMLDivElement>(null);
  const { scroll, computeHeight } = useScroll(tbodyRef);

  // 获取显示列
  const getColumns = useMemo(() => {
    const showColumns = columns
      .map((c) => ({ ...columnOption, ...c }))
      .filter((c) => (isFunc(c.show) && c.show(c)) || c.show);
    return compact([enableIndexColumn && indexColumnOption, ...showColumns, operationColumnOption]);
  }, [columns, enableIndexColumn]);

  // 获取行选择器
  const getRowSelection = useMemo(() => {
    if (!enableSelectionColumn || (typeof rowSelection === 'boolean' && !rowSelection)) return;
    return rowSelection ? rowSelectionOption : { ...rowSelectionOption, ...(rowSelection || {}) };
  }, [rowSelection, enableSelectionColumn]);

  // 获取行className
  const getRowClassName = useMemo(() => {
    return (record: object, index: number, indent: number) => {
      const className =
        typeof rowClassName === 'function' ? rowClassName(record, index, indent) : '';
      return `${className} ${stripe && index % 2 !== 0 ? 'table-row-even' : ''}`;
    };
  }, [rowClassName, stripe]);

  // 获取分页器
  const getPagination = useMemo(() => {
    if (typeof pagination === 'boolean' && !pagination) return;
    const options = typeof pagination === 'object' ? pagination : {};
    return { ...paginationOption, ...options };
  }, [pagination]);

  useEffect(() => {
    computeHeight();
  }, [size]);

  return (
    <div className="tableplus-body flex-1 overflow-hidden" ref={tbodyRef}>
      <Table
        columns={getColumns}
        dataSource={dataSource}
        size={size}
        bordered={bordered}
        rowSelection={getRowSelection}
        rowClassName={getRowClassName}
        scroll={scroll}
        pagination={getPagination}
      />
    </div>
  );
}
