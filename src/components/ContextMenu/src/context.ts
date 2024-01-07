import React, { createContext } from 'react';
import type { ContextmenuItem } from './types';

export interface Context {
  handleHide?: () => void;
  onClick?: (item: ContextmenuItem) => void;
}

export const context = createContext<Context>({});
export const { Provider, Consumer } = context;
