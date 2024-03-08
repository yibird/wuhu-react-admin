import React from 'react';
import { Row, Col } from 'antd';
import TaskGroup from './TaskGroup';
function TaskCard() {
  const items = [1, 2, 3, 4];
  return (
    <Row gutter={10}>
      {items.map((item, index) => {
        return (
          <Col span={6} key={item}>
            <TaskGroup key={index} />
          </Col>
        );
      })}
    </Row>
  );
}

export default TaskCard;
