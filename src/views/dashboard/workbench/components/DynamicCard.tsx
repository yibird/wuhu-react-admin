import React from 'react';
import { Card, Typography } from 'antd';

function DynamicCard() {
  return (
    <Card
      title="动态"
      headStyle={{ minHeight: 50 }}
      bodyStyle={{ padding: '0 24px' }}
      extra={<Typography.Link>更多</Typography.Link>}
    >
      动态
    </Card>
  );
}

export default DynamicCard;
