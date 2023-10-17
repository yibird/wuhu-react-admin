import React from 'react';

import {
  Form,
  Row,
  Col,
  Input,
  InputNumber,
  Select,
  Radio,
  Checkbox,
  Slider,
  Switch,
  DatePicker,
  TimePicker,
  Mentions,
  AutoComplete,
  Cascader,
  Transfer,
  TreeSelect,
  Space,
} from 'antd';
import { Button } from '@/components';
import { BasicFormProps, FormSchema, ComponentType } from './types';

const componentMap: Record<ComponentType, any> = {
  Input,
  InputPassword: Input.Password,
  InputSearch: Input.Search,
  InputNumber,
  InputTextArea: Input.TextArea,
  Select,
  Radio,
  RadioGroup: Radio.Group,
  Checkbox: Checkbox,
  CheckboxGroup: Checkbox.Group,
  Switch,
  Slider,
  DatePicker: DatePicker,
  RangePicker: DatePicker.RangePicker,
  TimePicker,
  Mentions,
  AutoComplete,
  Cascader,
  Transfer,
  TreeSelect,
};

function renderItem({ component, componentProps = {} }: FormSchema) {
  if (!component || !Object.keys(componentMap).includes(component)) return;
  const comp = componentMap[component];
  return React.createElement(comp, componentProps);
}

function BasicForm(props: BasicFormProps) {
  const { schemas = [], layout } = props;

  const [form] = Form.useForm();

  const onClick = () => {
    console.log(form.submit());
  };

  return (
    <Form {...props} form={form} className="px-10">
      <Row>
        {schemas.map((item) => {
          return (
            <Col span={6}>
              <Form.Item key={item.name} {...item}>
                {renderItem(item)}
              </Form.Item>
            </Col>
          );
        })}
      </Row>
      <Space className="w-full flex justify-end">
        <Button>添加</Button>
        <Button>删除</Button>
        <Button>重置</Button>
        <Button type="primary" onClick={onClick}>
          查询
        </Button>
      </Space>
    </Form>
  );
}

export default BasicForm;
