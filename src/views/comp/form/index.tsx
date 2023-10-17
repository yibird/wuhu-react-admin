import React from 'react';
import { BasicForm } from '@/components';
import type { BasicFormProps } from '@/components';
import { InputNumberProps, InputProps } from 'antd';

const schemas: BasicFormProps['schemas'] = [
  {
    name: 'name',
    label: '姓名',
    component: 'Input',
    componentProps: {
      placeholder: '请选择',
      defaultValue: '',
    } as InputProps,
    rules: [{ required: true, message: '请输入' }],
    validateStatus: 'validating',
  },
  {
    name: 'salary',
    label: '工资',
    component: 'InputNumber',
    componentProps: {
      max: 100000,
      min: 0,
    } as InputNumberProps,
  },
  {
    name: 'password',
    label: '密码',
    component: 'InputPassword',
    componentProps: {
      placeholder: '请选择',
      defaultValue: '1111111',
    },
  },
  {
    name: 'search',
    label: '搜索',
    component: 'InputSearch',
    componentProps: {
      placeholder: '请选择',
      defaultValue: '1111111',
    },
  },
  {
    name: 'level',
    label: '级别',
    component: 'Select',
    componentProps: {
      placeholder: '请选择',
      popupMatchSelectWidth: 150,
      options: [
        { label: '青铜', value: 0 },
        { label: '白银', value: 1 },
      ],
    },
  },
  {
    name: 'radio',
    label: 'radio',
    component: 'Radio',
    componentProps: {},
  },
  {
    name: 'sex',
    label: '性别',
    component: 'RadioGroup',
    componentProps: {
      options: [
        { label: '男', value: 0 },
        { label: '女', value: 1 },
      ],
    },
  },
  {
    name: 'checkbox',
    label: 'checkbox',
    component: 'Checkbox',
    componentProps: {},
  },
  {
    name: 'checkboxGroup',
    label: 'checkboxGroup',
    component: 'CheckboxGroup',
    componentProps: {
      options: [
        { label: '男', value: 0 },
        { label: '女', value: 1 },
      ],
    },
  },
  {
    name: 'enable',
    label: '是否启用',
    component: 'Switch',
    componentProps: {
      max: 100000,
      min: 0,
    },
  },
  {
    name: 'datePicker',
    label: 'DatePicker',
    component: 'DatePicker',
  },
  {
    name: 'rangePicker',
    label: 'RangePicker',
    component: 'RangePicker',
    componentProps: {
      format: 'YYYY/MM/DD',
    },
  },
  {
    name: 'autoComplete',
    label: 'AutoComplete',
    component: 'AutoComplete',
    componentProps: {
      options: [
        { label: '男', value: 0 },
        { label: '女', value: 1 },
      ],
    },
  },
  {
    name: 'mentions',
    label: 'Mentions',
    component: 'Mentions',
    componentProps: {
      options: [
        {
          value: 'afc163',
          label: 'afc163',
        },
        {
          value: 'zombieJ',
          label: 'zombieJ',
        },
        {
          value: 'yesmeck',
          label: 'yesmeck',
        },
      ],
    },
  },
];

function FormComp() {
  return (
    <div>
      <div>FormComp</div>
      <BasicForm layout="inline" schemas={schemas} labelCol={{ span: 9 }} labelAlign="left" />
    </div>
  );
}

export default FormComp;
