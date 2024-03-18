import React from 'react';
import SettingContentHeader from './SettingContentHeader';
import SettingContentList from './SettingContentList';
import { Button } from '@/components';

export default function SettingContent() {
  //   const { columns, setColumns, setColumn, resetColumns } = useColumns();
  return (
    <div>
      <SettingContentHeader />
      <SettingContentList />
      <div className="flex justify-end p-10">
        <Button type="primary" size="small">
          重置
        </Button>
      </div>
    </div>
  );
}
