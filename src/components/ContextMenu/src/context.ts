import React, { createContext } from 'react';
import type { Options, HandleClick } from './types';

export interface Context {
  params?: Options['params'];
  handleHide?: () => void;
  onClick?: HandleClick;
}

export const context = createContext<Context>({});
export const { Provider, Consumer } = context;
