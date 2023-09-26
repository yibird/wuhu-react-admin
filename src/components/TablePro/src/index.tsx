import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Table } from 'antd';
import { useMount } from 'ahooks';
// import type { TableRowSelection } from 'antd/es/table/interface';
import TableHeader from './components/tableHeader';
import { TableProProps } from './types';

import { TableContext, ContextProvider } from './context';

import { isBool, isFunc } from '@/utils/is';

function TableProvider() {
  const { state } = useContext(TableContext);
  const { header, size = 'middle', rowSelection, scroll } = state;

  const [tableScroll, setTableScroll] = useState(scroll || { y: 20 });

  const tableHeader = useMemo(() => {
    return isBool(header) && header && <TableHeader header={header} />;
  }, [state.header]);

  const tableRef = useRef<HTMLDivElement>(null);

  const getRowSelection = useMemo(() => {
    if (typeof rowSelection === 'boolean') {
      return {
        type: 'checkbox' as 'checkbox' | 'radio',
        fixed: true,
      };
    }
    return rowSelection;
  }, [rowSelection]);

  function updateScrollY() {
    const table = tableRef.current;
    if (!table) return;
    const tHeaderH = table.getElementsByClassName('table-header')[0].offsetHeight;
    const antdTableHeaderH = table.getElementsByClassName('ant-table-thead')[0].offsetHeight;
    const pageH = table.getElementsByClassName('ant-pagination')[0].offsetHeight;

    const y = table.clientHeight - tHeaderH - antdTableHeaderH - pageH - 20;
    console.log(y);
    // console.log('table.clientHeight:', table.clientHeight, tHeaderH, antdTableHeaderH, pageH, y);
    setTableScroll({ y: 530 });
  }
  useEffect(() => {
    updateScrollY();
  }, [size]);

  useMount(() => {
    updateScrollY();
  });

  return (
    <div ref={tableRef} className="h-full bg-white">
      {tableHeader}
      <div className="px-10">
        <Table
          bordered
          columns={state.columns}
          dataSource={state.dataSource}
          size={size}
          rowSelection={getRowSelection}
          scroll={tableScroll}
        />
      </div>
    </div>
  );
}

const snColumns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    width: 100,
    render(text: string, record: object, index: number) {
      return index + 1;
    },
    align: 'center',
  },
];

function TablePro(props: TableProProps) {
  const {
    header = true,
    title,
    size = 'middle',
    columns = [],
    dataSource,
    rowSelection = true,
    enableSnColumn = false,
  } = props;
  const [scroll, _] = useState({ y: 500 });

  const getColumns = useMemo(() => {
    const cols = columns.filter((c) => {
      return (isFunc(c.show) && !c.show()) || !c.show;
    });
    return enableSnColumn ? [...snColumns, ...cols] : cols;
  }, [columns, enableSnColumn]);

  const state = {
    header,
    title,
    size,
    columns: getColumns,
    dataSource,
    rowSelection,
    scroll,
    enableSnColumn,
  };
  return (
    <ContextProvider value={state}>
      <TableProvider />
    </ContextProvider>
  );
}

export default TablePro;
