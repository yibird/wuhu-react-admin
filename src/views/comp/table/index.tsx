import React from "react";
import View from "@/components/View/src/View";
import TablePro from "@/components/TablePro";
import ViewContainer from "@/components/Container/src/ViewContainer";
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
    <ViewContainer>
      <View direction="vertical">
        <View.Hander>
          <div style={{ height: 50 }}>Form</div>
        </View.Hander>
        <View>
          <View.Sider style={{ overflowY: "auto" }}>
            <div style={{ height: 10000 }}>Sider</div>
          </View.Sider>
          <View.Content>
            <TablePro
              rowSelection={{ fixed: true, type: "checkbox" }}
              header={true}
              columns={columns}
              dataSource={dataSource}
              title={{ label: "列表", describe: "这是一个列表" }}
            />
          </View.Content>
        </View>
      </View>
    </ViewContainer>
  );
}

export default TableComp;
