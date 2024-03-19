import React, { createElement } from 'react';
import type { Column, RowSelection, TablePlusProps } from '../types';
import Operation from '../components/content/operation';

export const defaultProps: TablePlusProps = {
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

export const columnOption: Column = {
  align: 'center',
  show: true,
};

export const rowSelectionOption: RowSelection = {
  type: 'checkbox',
  fixed: true,
};
export const indexColumnOption: Column = {
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
export const operationColumnOption: Column = {
  title: '操作',
  dataIndex: 'operate',
  key: 'operate',
  align: 'center',
  width: 120,
  fixed: 'right',
  render: (text, record, index) => {
    return createElement(Operation, { text, record, index });
  },
};

export const paginationOption = {
  // size: 'default',
  showQuickJumper: true,
  pageSizeOptions: [10, 20, 50, 100, 200],
  defaultPageSize: 10,
  showTotal(total: number) {
    return createElement('div', null, [
      createElement('span', null, '共'),
      createElement('span', { className: 'font-bold mx-4' }, total),
      createElement('span', null, '条数据'),
    ]);
  },
};
