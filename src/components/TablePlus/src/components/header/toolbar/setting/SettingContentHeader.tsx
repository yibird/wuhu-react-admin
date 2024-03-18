import React, { useState } from 'react';
import { Checkbox, Space } from 'antd';
import { useSharedState } from '@/components/TablePlus/src/context';
import { compact } from 'lodash-es';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const options = [
  { label: '列显示', value: 'showColumn' },
  { label: '选择列', value: 'selectionColumn' },
  { label: '序号列', value: 'indexColumn' },
];
export default function SettingContentHeader() {
  const [{ enableSelectionColumn, enableIndexColumn }, setState] = useSharedState();

  const handleChangeSelectionColumn = (e: CheckboxChangeEvent) => {
    setState((state) => ({ ...state, enableSelectionColumn: e.target.checked }));
  };
  const handleChangeIndexColumn = (e: CheckboxChangeEvent) => {
    setState((state) => ({ ...state, enableIndexColumn: e.target.checked }));
  };
  return (
    <Space className="py-8 px-20">
      <Checkbox>列显示</Checkbox>
      <Checkbox onChange={handleChangeSelectionColumn} checked={enableSelectionColumn}>
        选择列
      </Checkbox>
      <Checkbox onChange={handleChangeIndexColumn} checked={enableIndexColumn}>
        序号列
      </Checkbox>
    </Space>
  );
}
