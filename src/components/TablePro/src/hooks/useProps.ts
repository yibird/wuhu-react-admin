import { TableProProps } from '../types';
import { useMemo } from 'react';

const defaultProps: TableProProps = {
  dataSource: [],
  columns: [],
  bordered: true,
  size: 'small',
  rowSelection: true,
  showIndexColumn: true,
  pagination: true,
};

const defaultColumnOptions = {
  show: true,
  allowExport: true,
};

export function useProps(props: TableProProps) {
  props = { ...defaultProps, ...props };
  const { title, size, showIndexColumn, rowSelection, columns } = props;
  const getColumns = useMemo(() => {
    return (columns ?? []).map((item) => {
      return { ...defaultColumnOptions, ...item };
    });
  }, [columns]);

  const contextValue = {
    title,
    size,
    showIndexColumn,
    rowSelection,
    columns: getColumns,
    oldColumns: [...getColumns],
  };
  return { contextValue, mergeProps: { ...props, columns: getColumns } };
}
