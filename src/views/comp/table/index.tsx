import React from 'react';
import { View } from '@/components';
import { ViewContainer } from '@/components';
import TablePro from '@/components/TablePro';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 300,
    filterSearch: true,
    filters: [
      {
        text: '胡彦祖1',
        value: '胡彦祖1',
      },
      {
        text: '胡彦祖2',
        value: '胡彦祖2',
      },
    ],
    onFilter: (value: string, record) => record.name.startsWith(value),
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 300,
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    show: false,
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    width: 100,
  },
  {
    title: '编号',
    dataIndex: 'no',
    key: 'no',
    width: 200,
  },
  {
    title: '密码',
    dataIndex: 'password',
    key: 'password',
    width: 200,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
    width: 500,
  },
  // {
  //   title: '操作',
  //   dataIndex: 'op',
  //   key: 'op',
  //   width: 100,
  //   align: 'center',
  //   fixed: 'right',
  // },
];
const dataSource: any[] = [];
for (let i = 0; i < 100; i += 1) {
  dataSource.push({
    key: i + 100,
    name: `胡彦祖${i}`,
    age: 42,
    address: '西湖区湖底公园1号',
    sex: i % 2 === 0 ? '男' : '女',
    no: 'SQEQQEQEE_' + i,
    password: 'password:' + i,
    remark: 'remark:' + i,
  });
}
export default function TableComp() {
  console.log('TableComp');
  return (
    <ViewContainer>
      <View direction="vertical">
        <View.Header>
          <div style={{ height: 50 }}>Form</div>
        </View.Header>
        <View direction="horizontal">
          <View.Sider style={{ overflowY: 'auto' }}>
            <div style={{ height: 10000 }}>Sider</div>
          </View.Sider>
          <View.Content>
            <TablePro
              rowSelection={{ fixed: true, type: 'checkbox' }}
              header={true}
              columns={columns}
              dataSource={dataSource}
              title={{ label: '列表', describe: '这是一个列表' }}
              operateColumn={true}
            />
          </View.Content>
        </View>
      </View>
    </ViewContainer>
  );
}
