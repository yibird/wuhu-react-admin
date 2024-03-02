import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { Icon } from '@/components';

const RULES = {
  PASSWORD: [{ required: true, message: '请输入密码' }],
  NEWPASSWORD: [{ required: true, message: '请输入密码' }],
};

interface ChangePasswordProps {
  open?: boolean;
  onClose?: () => void;
}

export default function ChangePassword({ open = false, onClose }: ChangePasswordProps) {
  const [form] = Form.useForm();
  const onOk = () => {
    typeof onClose === 'function' && onClose();
  };
  return (
    <Modal title="修改密码" open={open} onCancel={onClose} onOk={onOk}>
      <Form form={form} className="mt-15">
        <Form.Item name="password" rules={RULES.PASSWORD}>
          <Input.Password
            size="large"
            placeholder="请输入密码"
            prefix={<Icon name="lock-line" size={20} />}
          />
        </Form.Item>
        <Form.Item name="password" rules={RULES.NEWPASSWORD}>
          <Input.Password
            size="large"
            placeholder="请输入新密码"
            prefix={<Icon name="lock-line" size={20} />}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
