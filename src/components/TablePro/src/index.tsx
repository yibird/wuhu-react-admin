import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Table } from "antd";

import TableHeader from "./components/tableHeader";
import { TableProProps, TableContextProvider } from "./types";

import { TableContext, ContextProvider } from "./context";

import { isBool, isFunc } from "@/utils/is";
import { TableRowSelection } from "antd/es/table/interface";
import { useMount } from "ahooks";
// import { TableRowSelection } from "antd/es/table/interface";

function TableProvider() {
  const { state } = useContext(TableContext);
  const { header, size = "middle", rowSelection, scroll } = state;

  const [tableScroll, setTableScroll] = useState(scroll || { y: 20 });

  const tableHeader = useMemo(() => {
    return isBool(header) && header && <TableHeader header={header} />;
  }, [state.header]);

  const tableRef = useRef<HTMLDivElement>(null);

  const getRowSelection = useMemo(() => {
    if (typeof rowSelection === "boolean") {
      return {
        type: "checkbox" as "checkbox" | "radio",
        fixed: true,
      };
    }
    return rowSelection;
  }, [rowSelection]);

  function updateScrollY() {
    const table = tableRef.current;
    if (!table) return;
    const tHeaderH =
      table.getElementsByClassName("table-header")[0].clientHeight;
    const antdTableHeaderH =
      table.getElementsByClassName("ant-table-thead")[0].clientHeight;
    const pageH =
      table.getElementsByClassName("ant-pagination")[0].clientHeight;
    const y = table.clientHeight - tHeaderH - antdTableHeaderH - pageH;
    setTableScroll({ y });
  }

  useMount(() => {
    updateScrollY();
  });

  return (
    <div ref={tableRef} className="h-full bg-white">
      {tableHeader}
      <div className="px-10">
        <Table
          columns={state.columns}
          dataSource={state.dataSource}
          size={size}
          rowSelection={getRowSelection}
          scroll={tableScroll}
        />
      </div>
    </div>
  );
}

function TablePro(props: TableProProps) {
  const {
    header = true,
    title,
    size = "middle",
    columns = [],
    dataSource,
    rowSelection = true,
  } = props;
  const [scroll, setScroll] = useState({ y: 500 });

  const getColumns = useMemo(() => {
    return columns.filter((c) => (isFunc(c.show) && !c.show()) || !c.show);
  }, [columns]);

  const state = {
    header,
    title,
    size,
    columns: getColumns,
    dataSource,
    rowSelection,
    scroll,
  };
  return (
    <ContextProvider value={state}>
      <TableProvider />
    </ContextProvider>
  );
}

export default TablePro;
