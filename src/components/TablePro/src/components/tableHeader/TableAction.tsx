import { Space } from 'antd';
import { Button } from '@/components';
import { useSharedState } from '../../context';
import { useMemo } from 'react';

export default function TableAction() {
  const [{ selectedRowKeys = [] }] = useSharedState();

  const delDisabled = useMemo(() => {
    return selectedRowKeys.length === 0;
  }, [selectedRowKeys]);

  const editDisabled = useMemo(() => {
    return selectedRowKeys.length !== 1;
  }, [selectedRowKeys]);

  return (
    <Space>
      <Button type="primary">添加</Button>
      <Button disabled={delDisabled} danger>
        删除
      </Button>
      <Button disabled={editDisabled}>编辑</Button>
      <Button>导入</Button>
      <Button>导出</Button>
    </Space>
  );
}
