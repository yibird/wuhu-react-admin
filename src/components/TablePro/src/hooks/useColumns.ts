import { useMemo } from 'react';
import type { TableProProps, Column } from '../types';
import { isFunc } from '@/utils/is';
import { useSharedState } from '../context';

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

export function useColumns() {
  const [{ columns = [], showIndexColumn = true }, setState] = useSharedState();
  const getColumns = useMemo(() => {
    const showCols = columns.filter((c) => {
      return (isFunc(c.show) && c.show(c)) || c.show;
    });
    const cols = showIndexColumn ? [indexColumn, ...showCols] : showCols;
    return cols as NotNullable<TableProProps['columns']>;
  }, [columns, showIndexColumn]);

  const setColumns = (columns: TableProProps['columns']) => {
    setState((prev) => ({ ...prev, columns }));
  };

  return { getColumns, setColumns };
}
