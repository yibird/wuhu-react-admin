import { useState } from 'react';
import { createContainer } from 'react-tracked';
import type { IRoute } from './types';

export const { Provider: RouterProvider, useTracked: useSharedState } = createContainer<
  IRoute[],
  React.Dispatch<React.SetStateAction<IRoute[]>>,
  { value: IRoute[] }
>(({ value }) => useState(value || []));
