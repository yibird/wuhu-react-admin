import React from 'react';
import { Checkbox, Space } from 'antd';
import { useSharedState } from '@/components/TablePlus/src/context';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

export default function SettingContentHeader() {
  const [{ enableSelectionColumn, enableIndexColumn }, setState] = useSharedState();
  const checkboxs = [
    {
      title: '列显示',
      checked: false,
      onChange(e: CheckboxChangeEvent) {},
    },
    {
      title: '选择列',
      checked: enableSelectionColumn,
      onChange(e: CheckboxChangeEvent) {
        const enableSelectionColumn = e.target.checked;
        setState((state) => ({ ...state, enableSelectionColumn }));
      },
    },
    {
      title: '序号列',
      checked: enableIndexColumn,
      onChange(e: CheckboxChangeEvent) {
        const enableIndexColumn = e.target.checked;
        setState((state) => ({ ...state, enableIndexColumn }));
      },
    },
  ];

  return (
    <Space className="py-8 px-20">
      {checkboxs.map((item, index) => {
        return (
          <Checkbox key={index} checked={item.checked} onChange={item.onChange}>
            {item.title}
          </Checkbox>
        );
      })}
    </Space>
  );
}
