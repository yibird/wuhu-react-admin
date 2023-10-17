import type { BasicFormProps } from '../types';
import { Form } from 'antd';
export function useForm(props: BasicFormProps) {
  const form = Form.useForm();
  return [form];
}
