import { useState } from 'react';
import { createContainer } from 'react-tracked';
import { TableProProps, Column } from './types';

type Update<T> = React.Dispatch<React.SetStateAction<T>>;
type PickKey =
  | 'header'
  | 'title'
  | 'action'
  | 'actionPosition'
  | 'toolbar'
  | 'stripe'
  | 'size'
  | 'columns'
  | 'rowSelection'
  | 'indexColumn'
  | 'operateColumn';

export interface State extends Pick<TableProProps, PickKey> {
  showColumns: Column[];
  initColumns: Column[];
  tableRef?: React.RefObject<HTMLDivElement>;
}
export interface Action {}

const initialState: State = {
  header: true,
  title: false,
  action: true,
  actionPosition: 'right',
  toolbar: true,
  stripe: true,
  size: 'small',
  rowSelection: true,
  indexColumn: true,
  operateColumn: true,
  columns: [],
  showColumns: [],
  initColumns: [],
};
export const {
  Provider,
  useTracked: useSharedState,
  useSelector,
} = createContainer<State, Update<State>, { value: State }>(({ value }) =>
  useState({ ...initialState, ...value }),
);
