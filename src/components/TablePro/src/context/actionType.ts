import { TableProProps, TableSizeType } from '../types';
import { ContextState } from './types';

export type SetState = {
  type: 'setState';
  payload?: Partial<ContextState & TableProProps>;
};

export type SetTitle = {
  type: 'setTitle';
  payload?: Partial<ContextState>;
};

export type SetSize = {
  type: 'setSize';
  payload: TableSizeType;
};

export type ActionType = SetTitle | SetSize | SetState;
