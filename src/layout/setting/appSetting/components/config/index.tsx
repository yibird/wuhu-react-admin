import React from 'react';
import { Space, Button } from 'antd';

function Config() {
  return (
    <Space className="w-full" direction="vertical">
      <Button type="primary" block>
        拷贝
      </Button>
      <Button block>重置</Button>
      <Button type="primary" danger block>
        清空缓存并返回登录页
      </Button>
    </Space>
  );
}

export default Config;
