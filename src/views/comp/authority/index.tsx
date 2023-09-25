import React, { useState } from 'react';
import { Authority, CollapseContainer } from '@/components';
import { Button } from 'antd';

function AuthorityComp() {
  const [permissions, setPermissions] = useState<Array<string>>(['add', 'del', 'update', 'list']);
  const onClick = (permission: string) => {
    return () => {
      if (permission === '') {
        setPermissions([]);
        return;
      }
      if (!permissions.includes(permission)) {
        setPermissions([...permissions, permission]);
      }
    };
  };
  return (
    <div>
      <CollapseContainer title={'hello'} />
      <br />

      <div>权限列表:{permissions.join(',')}</div>

      <Authority value={permissions}>
        <div>123123123</div>
      </Authority>
      <div>
        <Button onClick={onClick('add')}>添加添加权限</Button>
        <Button onClick={onClick('update')}>添加修改权限</Button>
        <Button onClick={onClick('del')}>添加删除权限</Button>
        <Button onClick={onClick('list')}>添加查询列表权限</Button>
        <Button onClick={onClick('')}>重置权限</Button>
      </div>
    </div>
  );
}

export default AuthorityComp;
