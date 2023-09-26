import React from 'react';
import type { CardItemType } from '../types';
import { Card } from 'antd';
import CardItemExtra from './CardItemExtra';

interface CardItemProps extends BaseProps {
  item: CardItemType;
  loading?: boolean;
  onChange?: (type: number) => void;
}

export default function CardItem({ item, loading = false, onChange }: CardItemProps) {
  return (
    <Card
      title={item.title}
      headStyle={{ padding: 10, minHeight: 48 }}
      bordered={false}
      extra={<CardItemExtra type={item.dateType} onChange={onChange!} />}
      loading={loading}
    >
      <div className="flex-between-center">
        <span className="text-2xl font-bold">{item.value}</span>
        <img className="w-40 h-40" src={item.icon} />
      </div>
      <div className="flex-between-center mt-20">
        <span>{item.describe}</span>
        <span>{item.totalValue}</span>
      </div>
    </Card>
  );
}
