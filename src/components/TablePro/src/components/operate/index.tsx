import React, { useState } from 'react';
import { Space, Modal } from 'antd';
import { Button } from '@/components';
import { EditModal } from './EditModal';

export default function OperateColumn() {
  const [editOpen, setEditOpen] = useState(false);
  return (
    <Space className="w-full flex-x-center">
      <Button onClick={() => setEditOpen(true)} type="primary" size="small">
        编辑
      </Button>
      <Button type="error" size="small" danger>
        删除
      </Button>
      <Button size="small">详情</Button>
      <EditModal open={editOpen} onCancel={() => setEditOpen(false)} />
    </Space>
  );
}
