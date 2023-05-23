import React from "react";
import { Card, Typography } from "antd";
const Dynamics: React.FC = () => {
  return (
    <Card
      title="动态"
      headStyle={{ minHeight: 50 }}
      extra={<Typography.Link>更多</Typography.Link>}
    >
      123123
    </Card>
  );
};

export default Dynamics;
