import React from 'react';
import { Tabs } from 'antd';
import FilterCondition from './FilterCondition';
import SaleStatistics from './SaleStatistics';
import VisitStatistics from './VisitStatistics';

const items = [
  {
    label: '销售额',
    key: '1',
    children: <SaleStatistics />,
  },
  {
    label: '访问量',
    key: '2',
    children: <VisitStatistics />,
  },
];

export default function Statistics() {
  return (
    <div className="p-10 bg-white">
      <Tabs items={items} tabBarExtraContent={<FilterCondition />} />
    </div>
  );
}
