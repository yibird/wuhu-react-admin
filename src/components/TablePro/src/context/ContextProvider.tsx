import { Reducer, useReducer } from "react";
import type { ContextProviderProps } from "./types";
import type { ActionType } from "./actionType";
import { TableContext } from "./index";
import { TableProProps } from "../types";

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
  value,
}) => {
  function reducer(state: TableProProps, action: ActionType) {
    const { type, payload } = action;
    switch (type) {
      default:
        return state;
      case "setTitle":
        return state;
      case "setSize":
        return { ...state, size: payload };
      case "setState":
        return { ...state, ...payload };
    }
  }

  // const initialState: TableProProps = {
  //   title: value.title,
  //   size: value.size || "middle",
  // };

  const [state, dispatch] = useReducer<Reducer<TableProProps, ActionType>>(
    reducer,
    value
  );
  return (
    <TableContext.Provider value={{ state, dispatch }}>
      {children}
    </TableContext.Provider>
  );
};
