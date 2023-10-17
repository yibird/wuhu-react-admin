import React, { useMemo } from 'react';
import type { TableProProps, Column, OperateColumn } from '../types';
import { isBool, isFunc, isObject } from '@/utils/is';
import { useSharedState } from '../context';

import { compact } from 'lodash-es';

import ColumnOperate from '../components/operate';

const indexColumn = {
  key: 'index',
  title: '序号',
  dataIndex: 'index',
  align: 'center',
  width: 80,
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

export function useColumns() {
  const [{ columns = [], showIndexColumn = true, operateColumn = true }, setState] =
    useSharedState();

  const getOperateColumn: OperateColumn = useMemo(() => {
    if (isBool(operateColumn)) {
      return { ...defaultOperateColumn, show: operateColumn };
    }
    if (isObject(operateColumn)) {
      return {
        ...defaultOperateColumn,
        ...operateColumn,
      };
    }
    return { ...defaultOperateColumn, render: () => 1111 };
  }, [operateColumn]);

  const getColumns = useMemo(() => {
    // 获取需要显示的Column集合
    const showCols = columns.filter((c) => {
      return (isFunc(c.show) && c.show(c)) || c.show;
    });
    const showOpCol = getOperateColumn.show ?? true;
    return compact([
      showIndexColumn && indexColumn,
      ...showCols,
      showOpCol && getOperateColumn,
    ]) as NotNullable<Column[]>;
  }, [columns, showIndexColumn]);

  const setColumns = (columns: TableProProps['columns']) => {
    setState((prev) => ({ ...prev, columns }));
  };

  return { getColumns, setColumns };
}
