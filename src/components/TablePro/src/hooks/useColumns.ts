import React, { useMemo, useRef } from 'react';
import { isFunc } from '@/utils/is';
import { compact } from 'lodash-es';
import ColumnOperate from '../components/operate';
import type { Column, OperateColumn } from '../types';
import { useSharedState } from '../context';
import { useMount } from 'ahooks';

const indexColumnOptions: Column = {
  key: 'index',
  title: '序号',
  dataIndex: 'index',
  width: 80,
  align: 'center',
  fixed: 'left',
  render(text: string, record: object, index: number) {
    return index + 1;
  },
};
const defaultOperateColumn: OperateColumn = {
  key: 'operate',
  title: '操作',
  dataIndex: 'operate',
  align: 'center',
  width: 300,
  fixed: 'right',
  render(text, record, index) {
    console.log(text, record, index);
    return React.createElement(ColumnOperate);
  },
};

const defaultColumnOptions: Column = {
  align: 'center',
  show: true,
};

export function useColumns() {
  const [{ columns = [], indexColumn }, setState] = useSharedState();
  const getColumns = useMemo(() => {
    const showColumns = columns
      .map((item) => ({ ...defaultColumnOptions, ...item }))
      .filter((c) => {
        return (isFunc(c.show) && c.show(c)) || c.show;
      });
    return compact([indexColumn && indexColumnOptions, ...showColumns]);
  }, [columns, indexColumn]);
  const copyColumns = useRef<Column[]>([]);
  useMount(() => {
    copyColumns.current = columns;
  });

  const setColumns = (columns: Column[]) => {
    setState((prev) => ({ ...prev, columns }));
  };
  const setColumn = (index: number, column: Column) => {
    const newColumns = columns.map((item, i) => {
      return i === index ? column : item;
    });
    setColumns(newColumns);
  };
  const setColumnByKey = (key: string, column: Column) => {
    const newColumns = columns.map((item, i) => {
      return item.key === key ? column : item;
    });
    setColumns(newColumns);
  };
  const setColumnShow = (index: number, show: boolean) => {
    const newColumns = columns.map((item, i) => {
      return { ...item, show: i === index ? show : item.show };
    });
    setColumns(newColumns);
  };
  const resetColumns = () => {
    setColumns(copyColumns.current);
  };
  return {
    columns,
    getColumns,
    setColumns,
    setColumn,
    setColumnByKey,
    setColumnShow,
    resetColumns,
  };
}
