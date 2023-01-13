import React from "react";
import Button from "@/components/Button";
import { Divider, Space } from "antd";

function ButtonComp() {
  return (
    <div className="p-20">
      <Divider>主题</Divider>
      <Space>
        <Button block>default</Button>
        <Button type="primary">primary</Button>
        <Button type="success">success</Button>
        <Button type="error">error</Button>
        <Button type="warning">warning</Button>
      </Space>
    </div>
  );
}

export default ButtonComp;
