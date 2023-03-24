import React from "react";
import View from "@/components/View/src/View";
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
    <View style={{ padding: 10 }}>
      <View.ViewSider>Sider</View.ViewSider>
      <View>
        <div>12312</div>
        {/* <View.ViewHander>
          <div style={{ height: 100 }}>Form</div>
        </View.ViewHander> */}
        {/* <View.ViewContent>
          <TablePro
            rowSelection={{ fixed: true, type: "checkbox" }}
            header={true}
            columns={columns}
            dataSource={dataSource}
            title={{ label: "列表", describe: "这是一个列表" }}
          />
        </View.ViewContent> */}
      </View>
    </View>
  );
}

export default TableComp;
