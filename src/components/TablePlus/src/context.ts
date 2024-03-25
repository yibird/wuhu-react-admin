import { useState } from 'react';
import { createContainer } from 'react-tracked';
import type { TablePlusProps } from './types';

type Update<T> = React.Dispatch<React.SetStateAction<T>>;
export interface State extends TablePlusProps {
  /**
   * @desc 是否全屏
   * @default false
   */
  full?: boolean;
}

const initialState: State = {};

export const {
  Provider,
  useTracked: useSharedState,
  useSelector,
} = createContainer<State, Update<State>, { value: State }>(({ value }) => {
  return useState({ ...initialState, ...value });
});
