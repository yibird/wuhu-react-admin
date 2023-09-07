import React from 'react';
import View from '@/components/View/src/View';

// const columns = [
//   {
//     title: '姓名',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: '年龄',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: '住址',
//     dataIndex: 'address',
//     key: 'address',
//   },
// ];
const dataSource: any[] = [];
for (let i = 0; i < 100; i += 1) {
  dataSource.push({
    key: i,
    name: `胡彦祖_+${i}`,
    age: 42,
    address: '西湖区湖底公园1号',
  });
}
function TableComp() {
  return (
    <View direction="vertical">
      <View.Header>
        <div style={{ height: 50 }}>Form</div>
      </View.Header>
      <View>
        <View.Sider>Sider</View.Sider>
        <View.Content>Content</View.Content>
      </View>
    </View>
  );
  return (
    <View>
      <View.Sider>Sider</View.Sider>
      <View direction="vertical">
        <View.Header>
          <div style={{ height: 50 }}>Form</div>
        </View.Header>
        <View.Content>12312</View.Content>
      </View>
    </View>
  );
}

export default TableComp;
