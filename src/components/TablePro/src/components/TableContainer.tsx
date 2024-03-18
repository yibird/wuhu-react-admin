import React from 'react';
import { Table } from 'antd';
import { useSharedState } from '../context';
import { useColumns, usePagination, useRowSelection, useScroll } from '../hooks';
import type { TableProProps } from '../types';

function TableContainer(props: TableProProps) {
  const { dataSource, bordered = true } = props;
  const [{ tableRef, size, rowSelection }] = useSharedState();
  const { getColumns } = useColumns();
  const { getScroll, redoHeight } = useScroll({ ...props, size }, tableRef!);
  const { getRowSelection } = useRowSelection(rowSelection);
  const { current, pageSize, pagination } = usePagination(props.pagination);

  // ============================ mthods
  const onChange: TableProProps['onChange'] = (pagination, filters, sorts, extra) => {
    switch (extra.action) {
      case 'paginate':
        redoHeight();
        props.onPaging && props.onPaging(current!, pageSize!);
        return;
      case 'filter':
        return;
      case 'sort':
        return;
    }
  };

  console.log('getColumns:', getColumns);

  return (
    <Table
      columns={getColumns}
      dataSource={dataSource}
      bordered={bordered}
      size={size}
      rowSelection={getRowSelection}
      scroll={getScroll}
      pagination={pagination}
      onChange={onChange}
    />
  );
}

export default TableContainer;
