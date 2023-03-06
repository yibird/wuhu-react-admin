import { createContext } from "react";
import type { TableContextProvider } from "./types";
export const TableContext = createContext<TableContextProvider>({
  title: false,
  size: "middle",
});
