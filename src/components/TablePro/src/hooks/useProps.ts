import { isObject } from '@/utils/is';
import { TableProProps } from '../types';
import { useMemo } from 'react';
import React from 'react';
import ColumnOperate from '../components/operate';

const defaultProps: TableProProps = {
  dataSource: [],
  columns: [],
  bordered: true,
  size: 'small',
  rowSelection: true,
  showIndexColumn: true,
  pagination: true,
};

const defaultColOptions = {
  show: true,
  allowExport: true,
};

const defaultOpColOptions = {
  key: 'operate',
  title: '操作',
  dataIndex: 'operate',
  align: 'center',
  width: 300,
  fixed: 'right',
  render() {
    return React.createElement(ColumnOperate);
  },
};

export function useProps(props: TableProProps) {
  props = { ...defaultProps, ...props };
  const { title, size, showIndexColumn, rowSelection, columns, operateColumn } = props;

  const getColumns = useMemo(() => {
    return (columns ?? []).map((item) => {
      return { ...defaultColOptions, ...item };
    });
  }, [columns]);

  const contextValue = {
    title,
    size,
    showIndexColumn,
    rowSelection,
    columns: getColumns,
    oldColumns: [...getColumns],
    operateColumn,
  };
  return { contextValue, mergeProps: { ...props, columns: getColumns } };
}
