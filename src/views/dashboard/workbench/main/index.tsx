import React from "react";
import { Col, Space } from "antd";
import Project from "./Project";
import Dynamics from "./Dynamics";

const MainContent: React.FC = () => {
  return (
    <Col span={16}>
      <Space direction="vertical" size={10} style={{ width: "100%" }}>
        <Project />
        <Dynamics />
      </Space>
    </Col>
  );
};

export default MainContent;
