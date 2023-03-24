import { createContext } from "react";
import { TableProProps } from "../types";
import type { TableContextType } from "./types";

export { ContextProvider } from "./ContextProvider";
export const initialState: TableProProps = { size: "middle" };
export const TableContext = createContext<TableContextType>({
  state: initialState,
  dispatch: () => {},
});
