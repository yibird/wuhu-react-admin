import React, { ReactNode, useContext, useMemo } from 'react';
import { Tooltip, Checkbox, Divider, Popover } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import Icon from '@/components/Icon';
import { TableContext } from '../../context';
import type { Column } from '../../types';
import { isBool, isNull } from '@/utils/is';

function ColumnItem({ data }: { data: Column<any> }) {
  const title = React.createElement('span', null, [data.title as ReactNode]);

  return (
    <li>
      <div className="flex-y-center justify-between py-4 px-20">
        <div className="flex-y-center">
          <Icon size={20} name="drag-move-line" />
          <Checkbox className="ml-8">{title}</Checkbox>
        </div>
        <div>
          <Icon size={20} name="skip-left-line" />
          <Icon size={20} name="skip-right-line" />
        </div>
      </div>
      <Divider className="m-0" />
    </li>
  );
}

const options = [
  { label: '列显示', value: 'Apple' },
  { label: '序号列', value: 'snColumn' },
  { label: '选择列', value: 'selectionColumn' },
];

function ColumnExportContent() {
  const { state } = useContext(TableContext);

  const { columns = [], rowSelection, enableSnColumn } = state;

  const isShowRowSelection = useMemo(() => {
    if (typeof rowSelection === 'boolean') return rowSelection;
    return !isNull(rowSelection);
  }, [rowSelection]);

  console.log('rowSelection:', isShowRowSelection);

  const value = useMemo(() => {
    const result = [];
    if (enableSnColumn) {
      result.push('snColumn');
    }
    if ((isBool(rowSelection) && rowSelection) || !isNull(rowSelection)) {
      result.push('selectionColumn');
    }
    return result;
  }, [rowSelection, enableSnColumn]);

  const onChange = (val: CheckboxValueType[]) => {
    console.log('val：', val);
  };

  return (
    <div>
      <div className="py-8 px-20 border-solid-b-#f5f5f5">
        <Checkbox.Group options={options} defaultValue={value} onChange={onChange} />
      </div>
      <ul className="max-h-200 overflow-y-auto">
        {columns.map((column) => {
          return <ColumnItem key={column.key} data={column} />;
        })}
      </ul>
    </div>
  );
}

function ColumnSetting() {
  return (
    <Tooltip title="列设置">
      <Popover
        content={<ColumnExportContent />}
        placement="bottomRight"
        trigger={['click']}
        overlayClassName="popover"
      >
        <span>
          <Icon size={20} name="settings-line" />
        </span>
      </Popover>
    </Tooltip>
  );
}

export default ColumnSetting;
