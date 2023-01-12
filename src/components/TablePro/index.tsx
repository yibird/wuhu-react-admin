import React, { useEffect, useRef, useState } from "react";
import { Table } from "antd";

import TableTitle from "./components/tableTitle";
import TableAction from "./components/tableAction";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];

const dataSource: any[] = [];
for (let i = 0; i < 100; i++) {
  dataSource.push({
    key: i,
    name: "胡彦祖_" + i,
    age: 42,
    address: "西湖区湖底公园1号",
  });
}

function TablePro() {
  const tableRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState({ y: 500 });

  const getTableBodyHeight = (el?: HTMLDivElement | null) => {
    if (!el) return 200;
    const tableHeader = el.getElementsByClassName("table-header")[0];
    const tableBodyHeader = el.getElementsByClassName("ant-table-header")[0];
    const tablePagination = el.getElementsByClassName(
      "ant-table-pagination"
    )[0];
    const headerH = tableHeader ? tableHeader.clientHeight : 0;
    const bodyHeaderH = tableBodyHeader ? tableBodyHeader.clientHeight : 0;
    const paginationH = tablePagination ? tablePagination.scrollHeight : 0;
    const { marginBlock = "0px" } = getComputedStyle(tablePagination);
    console.log("el.clientHeight:", el.clientHeight, paginationH);

    return (
      el.clientHeight -
      headerH -
      bodyHeaderH -
      paginationH -
      parseInt(marginBlock)
    );
  };

  const autoAdapteHeight = () => {
    const y = getTableBodyHeight(tableRef.current);
    setScroll({ y });
  };

  // useEffect(() => {
  //   autoAdapteHeight();
  //   window.addEventListener("resize", () => {
  //     autoAdapteHeight();
  //   });
  //   const observer = new MutationObserver((mutationsList, observer) => {
  //     for (let mutation of mutationsList) {
  //     }
  //   });
  //   const config = { attributes: true, childList: true, subtree: true };

  //   observer.observe(tableRef.current!, config);
  // }, []);

  return (
    <div ref={tableRef} className="h-full bg-white">
      <div className="table-header flex-y-center justify-between py-10 px-20">
        <TableTitle />
        <TableAction />
      </div>
      <div className="px-10">
        <Table
          columns={columns}
          dataSource={dataSource}
          scroll={scroll}
        ></Table>
      </div>
    </div>
  );
}

export default TablePro;
