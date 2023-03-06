import React, { useEffect, useMemo, useRef, useState } from "react";
import { Table } from "antd";

import TableHeader from "./components/tableHeader";
import { TableProProps, TableContextProvider } from "./types";

import { TableContext } from "./context";
import { isBool, isFunc } from "@/utils/is";
import { TableRowSelection } from "antd/es/table/interface";

function TablePro(props: TableProProps) {
  const {
    header = true,
    title,
    size,
    columns = [],
    dataSource,
    rowSelection,
  } = props;
  const tableRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState({ y: 500 });

  const getColumns = useMemo(() => {
    return columns.filter((c) => (isFunc(c.show) && !c.show()) || !c.show);
  }, [columns]);

  const getRowSelection = useMemo(() => {
    return { type: "checkbox" as "checkbox" | "radio", ...rowSelection };
  }, [rowSelection]);

  const [state, setState] = useState({
    size,
    columns: getColumns,
    dataSource,
    rowSelection: getRowSelection,
    scroll,
  });

  const providerValue: TableContextProvider = {
    title,
    size,
    setSize: (size) => setState({ ...state, size }),
  };

  return (
    <div ref={tableRef} className="h-full bg-white">
      <TableContext.Provider value={providerValue}>
        {isBool(header) && header && <TableHeader header={header} />}
      </TableContext.Provider>
      <div className="px-10">
        <Table {...state} />
      </div>
    </div>
  );
}

export default TablePro;
