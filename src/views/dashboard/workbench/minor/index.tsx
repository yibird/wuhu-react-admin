import React from 'react';
import { Col, Space } from 'antd';
import QuickActions from './QuickActions';
import Team from './Team';
import DataAnalysis from './DataAnalysis';

const MinorContent: React.FC = () => {
  return (
    <Col span={8}>
      <Space direction="vertical" size={10} style={{ width: '100%' }}>
        <QuickActions />
        <Team />
        <DataAnalysis />
      </Space>
    </Col>
  );
};

export default MinorContent;
