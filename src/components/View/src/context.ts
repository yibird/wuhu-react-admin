import { createContext } from 'react';

export const ViewContext = createContext<{ gutter: number | string }>({
  gutter: 10,
});
