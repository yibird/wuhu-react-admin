import React from 'react';
import { Tooltip, Popover, Checkbox, Select } from 'antd';
import { Button, Icon } from '@/components';
import { useSharedState } from '../../../context';

function ColumnItem() {
  return (
    <li className="flex-y-center justify-between py-4 px-20 border-0 border-b last:border-b-0 border-solid border-[#f5f5f5]">
      <div className="flex-y-center">
        <Icon size={20} name="drag-move-line" />
        <Checkbox className="ml-8">ID</Checkbox>
      </div>
      <div>asdasd</div>
    </li>
  );
}

function ColumnExportContent() {
  return (
    <div>
      <div className="py-8 px-20">
        <Select placeholder="请选择导出模板" style={{ width: 200 }}></Select>
        <Button>导出</Button>
      </div>
      <ul className="max-h-200 overflow-y-auto border-x-0 border-y border-solid border-[#f5f5f5]">
        <ColumnItem />
        <ColumnItem />
        <ColumnItem />
        <ColumnItem />
        <ColumnItem />
        <ColumnItem />
        <ColumnItem />
      </ul>
      <div className="flex justify-end py-8 px-20">
        <Button size="small" type="primary">
          自定义导出
        </Button>
      </div>
    </div>
  );
}

function Export() {
  const [{ action }] = useSharedState();
  if (Array.isArray(action) && !action.includes('export')) return;

  return (
    <Tooltip title="导出">
      <Popover
        content={<ColumnExportContent />}
        placement="bottomRight"
        trigger={['click']}
        overlayClassName="popover"
      >
        <span>
          <Icon name="download-2-line" size={20} />
        </span>
      </Popover>
    </Tooltip>
  );
}

export default Export;
