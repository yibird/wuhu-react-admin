import React, { useMemo, useRef, useState } from 'react';
import { Provider, useSharedState } from './context';
import { Table, PaginationProps } from 'antd';
import TableHeader from './components/tableHeader';
import type { TableProProps } from './types';
import { isBool } from '@/utils/is';

import { useColumns, useScroll, useProps } from './hooks';

const defaultPagination: PaginationProps = {
  size: 'default',
  showQuickJumper: true,
  pageSizeOptions: [10, 20, 50, 100, 200],
  defaultPageSize: 10,
  showTotal(total: number) {
    return (
      <div>
        共<span className="font-bold mx-4">{total}</span>条数据
      </div>
    );
  },
};

function TableContainer(props: TableProProps) {
  console.log('TableContainer:');
  const { dataSource, bordered, pagination } = props;
  const [{ size, rowSelection }] = useSharedState();

  const tableRef = useRef<HTMLDivElement>(null);

  const { getColumns } = useColumns();
  const { getScroll, redoHeight } = useScroll({ ...props, size }, tableRef);

  const getRowSelection = useMemo(() => {
    const defaultRowSelection = {
      type: 'checkbox' as 'checkbox' | 'radio',
      fixed: true,
    };
    if (isBool(rowSelection) && !rowSelection) return;
    return Object.assign(defaultRowSelection, rowSelection ?? {});
  }, [rowSelection]);

  const getPagination = useMemo(() => {
    if (isBool(pagination)) {
      return pagination ? defaultPagination : {};
    }
    return Object.assign(defaultPagination, pagination);
  }, [pagination]);

  // ============================ mthods
  const onChange: TableProProps['onChange'] = (pagination, filters, sorts, extra) => {
    switch (extra.action) {
      case 'paginate':
        redoHeight();
        const { current, pageSize } = pagination;
        props.onPaging && props.onPaging(current!, pageSize!);
        return;
      case 'filter':
        return;
      case 'sort':
        return;
    }
  };

  return (
    <div className="px-10 h-full" ref={tableRef}>
      <TableHeader />
      <Table
        columns={getColumns}
        dataSource={dataSource}
        bordered={bordered}
        size={size}
        rowSelection={getRowSelection}
        scroll={getScroll}
        pagination={getPagination}
        onChange={onChange}
      />
    </div>
  );
}

function TablePro(props: TableProProps) {
  const { contextValue, mergeProps } = useProps(props);

  // const getRowSelection = useMemo(() => {
  //   if (isObject(rowSelection)) return rowSelection;
  //   return {
  //     type: 'checkbox' as 'checkbox' | 'radio',
  //     fixed: true,
  //   };
  // }, [rowSelection]);
  console.log('mergeProps:', mergeProps);
  return (
    <Provider value={contextValue}>
      <TableContainer {...mergeProps} />
    </Provider>
  );
}

export default TablePro;
