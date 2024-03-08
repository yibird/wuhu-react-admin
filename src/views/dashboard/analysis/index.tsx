import React, { useState } from 'react';
import { Space, Row } from 'antd';
import { useMount } from 'ahooks';
import { ViewContainer } from '@/components';
import CardList from './cardList';
import Statistics from './statistics';
import RecentlyVisited from './RecentlyVisited';
import HotSearch from './HotSearch';
import HotTerms from './HotTerms';
import HotList from './HotList';

import type { CardItemType } from './types';

const cardList: CardItemType[] = [
  {
    id: 1,
    title: '访问数',
    describe: '总访问数',
    icon: 'src/assets/icons/visit-count.svg',
    value: '2,000',
    totalValue: '10,000',
    dateType: 1,
  },
  {
    id: 2,
    title: '成交额',
    describe: '总成交额',
    icon: 'src/assets/icons/transaction.svg',
    value: '$2,000',
    totalValue: '$10,000',
    dateType: 1,
  },
  {
    id: 3,
    title: '下载数',
    describe: '总下载数',
    icon: 'src/assets/icons/download-count.svg',
    value: '2,000',
    totalValue: '10,000',
    dateType: 1,
  },
  {
    id: 4,
    title: '成交数',
    describe: '总成交数',
    icon: 'src/assets/icons/total-sales.svg',
    value: '2,000',
    totalValue: '10,000',
    dateType: 1,
  },
];

function Analysis() {
  const [loading, setLoading] = useState(true);
  useMount(() => {
    setTimeout(() => {
      return setLoading(false);
    }, 2000);
  });
  const handleChangeCardItem = (id: number, type: number) => {
    console.log(id, type);
  };

  const [count, setCount] = useState(0);

  return (
    <ViewContainer>
      <Space direction="vertical" size={12} className="w-full">
        <CardList loading={loading} onChange={handleChangeCardItem} list={cardList} />
        <Statistics />
        <Row gutter={12}>
          <RecentlyVisited />
          <HotSearch />
        </Row>
        <Row gutter={12}>
          <HotTerms />
          <HotList />
        </Row>
      </Space>
    </ViewContainer>
  );
}
export default Analysis;
