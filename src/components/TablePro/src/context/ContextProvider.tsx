import React, { useMemo, useReducer } from 'react';
import type { Reducer } from 'react';
import type { ContextProviderProps } from './types';
import type { ActionType } from './actionType';
import { TableContext } from './index';
import { TableProProps } from '../types';

function ContextProvider({ children, value }: ContextProviderProps) {
  function reducer(state: TableProProps, action: ActionType) {
    const { type, payload } = action;
    switch (type) {
      case 'setTitle':
        return state;
      case 'setSize':
        return { ...state, size: payload };
      case 'setState':
        return { ...state, ...payload };
      default:
        return state;
    }
  }

  // const initialState: TableProProps = {
  //   title: value.title,
  //   size: value.size || "middle",
  // };

  const [state, dispatch] = useReducer<Reducer<TableProProps, ActionType>>(reducer, value);

  const providerValue = useMemo(() => {
    return { state, dispatch };
  }, []);
  return <TableContext.Provider value={providerValue}>{children}</TableContext.Provider>;
}
export default ContextProvider;
