import React from 'react';
import { Space, Radio, DatePicker } from 'antd';
import dayjs from 'dayjs';

const options = [
  { label: '今天', value: 'day' },
  { label: '本周', value: 'week' },
  { label: '本月', value: 'month' },
  { label: '本季度', value: 'quarter' },
  { label: '本年', value: 'year' },
];

export default function FilterCondition() {
  const onChange = () => {};
  return (
    <Space>
      <Radio.Group options={options} onChange={onChange} value={'day'} optionType="button" />
      <DatePicker.RangePicker
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
        }}
        format="YYYY-MM-DD HH:mm:ss"
      />
    </Space>
  );
}
