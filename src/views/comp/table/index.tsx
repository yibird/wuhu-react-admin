import React from "react";
import TablePro from "@/components/TablePro";
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
function TableComp() {
  return (
    <div>
      <TablePro
        header={true}
        columns={columns}
        dataSource={dataSource}
        title={{ label: "列表", describe: "这是一个列表" }}
      />
    </div>
  );
}

export default TableComp;
