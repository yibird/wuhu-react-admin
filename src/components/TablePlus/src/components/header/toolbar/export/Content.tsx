import React from 'react';
import { Select } from 'antd';
import { Button } from '@/components';

export default function Content() {
  return (
    <div>
      <div className="flex items-center py-8 px-20">
        <Select placeholder="请选择导出模板" style={{ width: 200 }}></Select>
        <Button>导出</Button>
      </div>
      <div className="flex justify-end py-8 px-20">
        <Button size="small" type="primary">
          自定义导出
        </Button>
      </div>
    </div>
  );
}
