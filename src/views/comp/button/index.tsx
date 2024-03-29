import React from 'react';
import { Divider, Space } from 'antd';
import { ViewContainer, Button } from '@/components';

function ButtonComp() {
  return (
    <ViewContainer>
      <Divider>主题</Divider>
      <Space>
        <Button block>default</Button>
        <Button type="primary">primary</Button>
        <Button type="success">success</Button>
        <Button type="error">error</Button>
        <Button type="warning">warning</Button>
      </Space>
    </ViewContainer>
  );
}

export default ButtonComp;
