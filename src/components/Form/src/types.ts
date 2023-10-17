import type { FormProps, FormItemProps, InputProps, SelectProps } from 'antd';
// schema组件类型
export type ComponentType =
  | 'Input'
  | 'InputNumber'
  | 'InputPassword'
  | 'InputSearch'
  | 'InputTextArea'
  | 'Select'
  | 'Radio'
  | 'RadioGroup'
  | 'Checkbox'
  | 'CheckboxGroup'
  | 'Switch'
  | 'Slider'
  | 'DatePicker'
  | 'RangePicker'
  | 'TimePicker'
  | 'AutoComplete'
  | 'Cascader'
  | 'Mentions'
  | 'Transfer'
  | 'TreeSelect';

export interface FormSchema extends FormItemProps {
  /**
   * @desc 显示组件
   * @default
   */
  component?: ComponentType;
  componentProps?: object;
}

export interface BasicFormProps extends FormProps {
  schemas?: FormSchema[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
}
