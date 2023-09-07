import React from 'react';
import { Col, Space } from 'antd';
import QuickActions from './QuickActions';
import Team from './Team';
import DataAnalysis from './DataAnalysis';

function MinorContent() {
  return (
    <Col span={8}>
      <Space direction="vertical" size={10} style={{ width: '100%' }}>
        <QuickActions data={[]} />
        <Team data={[]} />
        <DataAnalysis />
      </Space>
    </Col>
  );
}

export default MinorContent;
