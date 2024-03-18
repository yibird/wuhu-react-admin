import React, { useMemo } from 'react';
import { Table } from 'antd';
import { useSharedState } from '../../context';
import { isFunc } from '@/utils/is';
import type { Column, RowSelection } from '../../types';
import { compact } from 'lodash-es';

const defaultColOpt = {
  align: 'center',
  show: true,
};
const defaultRowSelection: RowSelection = {
  type: 'checkbox',
  fixed: true,
};
const indexColumn: Column = {
  title: '序号',
  dataIndex: 'index',
  key: 'index',
  align: 'center',
  width: 80,
  fixed: 'left',
  render: (text, record, index) => {
    return index + 1;
  },
};

export default function TableContent() {
  const [
    {
      columns = [],
      dataSource,
      rowSelection,
      rowClassName,
      enableSelectionColumn,
      enableIndexColumn,
      size,
      bordered,
      stripe,
    },
  ] = useSharedState();

  const getColumns = useMemo(() => {
    const showColumns = columns
      .map((c) => Object.assign({}, defaultColOpt, c))
      .filter((c) => (isFunc(c.show) && c.show(c)) || c.show);
    return compact([enableIndexColumn && indexColumn]).concat(showColumns);
  }, [columns, enableIndexColumn]);

  console.log('enableSelectionColumn:', enableSelectionColumn);
  const getRowSelection = useMemo(() => {
    if (!enableSelectionColumn || (typeof rowSelection === 'boolean' && !rowSelection)) return;
    return rowSelection ? defaultRowSelection : { ...defaultRowSelection, ...(rowSelection || {}) };
  }, [rowSelection, enableSelectionColumn]);

  const getRowClassName = useMemo(() => {
    return (record: object, index: number, indent: number) => {
      const className =
        typeof rowClassName === 'function' ? rowClassName(record, index, indent) : '';
      return `${className} ${stripe && index % 2 !== 0 ? 'table-row-even' : ''}`;
    };
  }, [rowClassName, stripe]);

  return (
    <div>
      <Table
        columns={getColumns}
        dataSource={dataSource}
        size={size}
        bordered={bordered}
        rowSelection={getRowSelection}
        rowClassName={getRowClassName}
      />
    </div>
  );
}
