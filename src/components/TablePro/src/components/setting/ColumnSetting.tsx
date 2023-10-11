import React, { ReactNode, useContext, useMemo, useState } from 'react';
import { Tooltip, Checkbox, Divider, Popover, Button } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { Icon } from '@/components';

import { useSharedState } from '../../context';
import type { Column } from '../../types';
import { isBool, isNull } from '@/utils/is';

const options = [
  { label: '列显示', value: 'showColumn' },
  { label: '序号列', value: 'indexColumn' },
  { label: '选择列', value: 'selectionColumn' },
];

function ColumnSettingHeader() {
  const [{ showColumn }, setState] = useState({
    showColumn: true,
  });
  const [{ rowSelection = true, showIndexColumn = true }, setContextState] = useSharedState();
  const showRowSelection = useMemo(() => {
    return isBool(rowSelection) ? rowSelection : !isNull(rowSelection);
  }, [rowSelection]);

  const value = useMemo(() => {
    const arr = [
      { key: 'showColumn', value: showColumn },
      { key: 'indexColumn', value: showIndexColumn },
      { key: 'selectionColumn', value: showRowSelection },
    ];
    return arr.filter((item) => item.value).map((item) => item.key);
  }, [showColumn, showRowSelection, showIndexColumn]);

  const onChange = (value: CheckboxValueType[]) => {
    const showIndexColumn = value.includes('indexColumn');
    const rowSelection = value.includes('selectionColumn');
    setContextState((prev) => ({
      ...prev,
      showIndexColumn,
      rowSelection,
    }));
  };
  return (
    <div className="py-8 px-20 border-solid-b-#f5f5f5">
      <Checkbox.Group options={options} defaultValue={value} onChange={onChange} />
    </div>
  );
}

export interface ColumnItemProps {
  column: Column<object>;
  onChange?: () => void;
}

function ColumnItem({ column, onChange }: ColumnItemProps) {
  const { title, show = true } = column;

  const renderTitle = React.createElement('span', null, [title as ReactNode]);
  const checked = useMemo(() => {
    return isBool(show) ? show : show(column);
  }, [show]);

  return (
    <li className="flex-y-center justify-between py-4 px-20 border-solid-b-#f5f5f5">
      <div className="flex-y-center">
        <Icon size={20} name="drag-move-line" />
        <Checkbox checked={checked} onChange={onChange} className="ml-8">
          {renderTitle}
        </Checkbox>
      </div>
      <div>
        <Icon size={20} name="skip-left-line" />
        <Icon size={20} name="skip-right-line" />
      </div>
    </li>
  );
}

function ColumnList() {
  const [{ columns = [] }, setState] = useSharedState();
  const onChange = (index: number) => {
    const newColumns = columns.map((item, i) =>
      i === index ? { ...item, show: !item.show } : item,
    );
    setState((prev) => ({
      ...prev,
      columns: newColumns,
    }));
  };

  return (
    <ul className="max-h-200 overflow-y-auto">
      {columns.map((column, index) => (
        <ColumnItem key={column.key} column={column} onChange={() => onChange(index)} />
      ))}
    </ul>
  );
}

function ColumnSettingFooter() {
  const [{ initialColumns }, setState] = useSharedState();
  const onClick = () => {
    console.log('initialColumns:', initialColumns);
    setState((prev) => ({ ...prev, columns: initialColumns }));
  };
  return (
    <div className="flex justify-end p-10">
      <Button onClick={onClick} type="primary" size="small">
        重置
      </Button>
    </div>
  );
}

function ColumnSettingContent() {
  return (
    <div>
      <ColumnSettingHeader />
      <ColumnList />
      <ColumnSettingFooter />
    </div>
  );
}

export function ColumnSetting() {
  return (
    <Tooltip title="列设置">
      <Popover
        content={<ColumnSettingContent />}
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
