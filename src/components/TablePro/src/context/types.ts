import { Dispatch, ReactNode } from "react";
import type { TableProProps, TableSizeType } from "../types";
import { ActionType } from "./actionType";

export interface ContextState {
  title?: TableProProps["title"];
  size?: TableSizeType;
}

export interface TableContextType {
  state: TableProProps;
  dispatch: Dispatch<ActionType>;
}

export interface ContextProviderProps {
  children?: ReactNode | undefined;
  value: TableProProps;
}
