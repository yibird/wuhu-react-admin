import React from 'react';
import { Col, Row } from 'antd';
import type { CardItemType } from '../types';
import CardItem from './CardItem';

interface CardListProps extends BaseProps {
  list?: CardItemType[];
  onChange?: (id: number, type: number) => void;
  loading?: boolean;
}

export default function CardList({ list = [], loading = false, onChange }: CardListProps) {
  return (
    <Row gutter={10}>
      {list.map((item) => {
        return (
          <Col span={6} key={item.id}>
            <CardItem item={item} loading={loading} onChange={(type) => onChange!(item.id, type)} />
          </Col>
        );
      })}
    </Row>
  );
}
