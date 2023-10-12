import { useState } from 'react';
import { createContainer } from 'react-tracked';
import { TableProProps, TableSizeType } from './types';

type Update<T> = React.Dispatch<React.SetStateAction<T>>;

export interface State {
  header: TableProProps['header'];
  title: TableProProps['title'];
  size: TableSizeType;
  columns: TableProProps['columns'];
  // 初始化columns,用于重置columns
  oldColumns: TableProProps['columns'];
  showIndexColumn: boolean;
  rowSelection: TableProProps['rowSelection'];
}

const initialState: Partial<State> = {
  header: true,
  title: true,
  size: 'small',
  columns: [],
  oldColumns: [],
  showIndexColumn: true,
  rowSelection: true,
};

export const {
  Provider,
  useTracked: useSharedState,
  useSelector,
} = createContainer<Partial<State>, Update<Partial<State>>, { value: Partial<State> }>(
  ({ value }) => useState({ ...initialState, ...value }),
);
