import { TableSizeType } from "../types";
import { ContextState } from "./types";

export type SetTitle = {
  type: "setTitle";
  payload?: Partial<ContextState>;
};

export type SetSize = {
  type: "setSize";
  payload: TableSizeType;
};

export type ActionType = SetTitle | SetSize;
