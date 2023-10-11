import React, { useMemo, useRef, useState } from 'react';
import { Provider, useSharedState } from './context';
import { Table, TableColumnsType, PaginationProps } from 'antd';
import TableHeader from './components/tableHeader';
import type { TableProProps, RowSelection } from './types';
import { isFunc, isObject } from '@/utils/is';
import { useMount } from 'ahooks';

const columnOptions = {
  show: true,
  allowExport: true,
};

const indexColumn = {
  title: '序号',
  dataIndex: 'index',
  key: 'index',
  width: 80,
  render(text: string, record: object, index: number) {
    return index + 1;
  },
  align: 'center',
};

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

function TableContainer({
  dataSource = [],
  bordered = true,
  scroll,
  pagination,

  onPaging,
}: TableProProps) {
  const tableRef = useRef<HTMLDivElement>(null);
  const [{ size = 'small', columns = [], rowSelection, showIndexColumn }] = useSharedState();

  const [state, setState] = useState({
    scroll,
  });

  const getShowColumns = useMemo(() => {
    const showCols = columns.filter((c) => {
      return (isFunc(c.show) && c.show(c)) || c.show;
    });
    const cols = showIndexColumn ? [indexColumn, ...showCols] : showCols;
    return cols as TableColumnsType<object>;
  }, [columns, showIndexColumn]);

  // ============================ mthods
  const onChange: TableProProps['onChange'] = (pagination, filters, sorts, extra) => {
    switch (extra.action) {
      case 'paginate':
        setTimeout(setScroll);
        const { current, pageSize } = pagination;
        onPaging && onPaging(current!, pageSize!);
        return;
      case 'filter':
        return;
      case 'sort':
        return;
    }
  };

  const setScroll = () => {
    window.addEventListener('DOMContentLoaded', function () {
      if (!tableRef.current) return;
      const header = tableRef.current.getElementsByClassName('table-header')[0];
      const tHeade = tableRef.current.getElementsByClassName('ant-table-thead')[0];
      const tBody = tableRef.current!.getElementsByClassName('ant-table-body')[0];
      const pagination = tableRef.current.getElementsByClassName('ant-table-pagination')[0];
      const computedStyle = window.getComputedStyle(pagination);
      const paginationHeight =
        pagination.clientHeight +
        parseFloat(computedStyle.marginTop) +
        parseFloat(computedStyle.marginBottom);
      if (tBody) {
        const isScroll = tBody.scrollHeight > tBody.clientHeight;
        const tHeadHeight = isScroll ? tHeade.clientHeight : 0;
        console.log('tHeadHeight:', tHeadHeight);
        const y =
          tableRef.current!.clientHeight - header.clientHeight - paginationHeight - tHeadHeight;
        setState((prev) => ({ ...prev, scroll: { y } }));
      }
    });
  };

  useMount(() => {
    setScroll();

    // const tableWrap = tableRef.current!.getElementsByClassName('ant-table-wrapper')[0];
    // const observer = new MutationObserver((mutationsList, observer) => {
    //   mutationsList.forEach(function (mutation) {
    //     if (mutation.type === 'childList' || mutation.type === 'attributes') {
    //       setScroll();
    //     }
    //   });
    // });
    // var config = { attributes: true, childList: true, subtree: true };
    // observer.observe(tableWrap, config);
  });

  return (
    <div className="px-10 h-full" ref={tableRef}>
      <TableHeader />
      <Table
        columns={getShowColumns}
        dataSource={dataSource}
        bordered={bordered}
        size={size}
        rowSelection={rowSelection as RowSelection}
        scroll={state.scroll}
        pagination={{ ...defaultPagination, ...pagination }}
        onChange={onChange}
      />
    </div>
  );
}

function TablePro(props: TableProProps) {
  const { title, size, columns = [], showIndexColumn = true, rowSelection } = props;

  const fillColumn = () => columns.map((item) => ({ ...columnOptions, ...item }));

  const getColumns = useMemo(() => fillColumn(), [columns]);
  const initialColumns = useMemo(() => fillColumn(), []);

  const getRowSelection = useMemo(() => {
    if (isObject(rowSelection)) return rowSelection;
    return {
      type: 'checkbox' as 'checkbox' | 'radio',
      fixed: true,
    };
  }, [rowSelection]);

  const value = {
    title,
    size,
    columns: getColumns,
    initialColumns,
    showIndexColumn,
    rowSelection: getRowSelection,
  };
  return (
    <Provider value={value}>
      <TableContainer {...props} />
    </Provider>
  );
}

export default TablePro;
