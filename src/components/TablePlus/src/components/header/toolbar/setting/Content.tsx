import React, { useRef } from 'react';
import SettingContentHeader from './ContentHeader';
import SettingContentList from './ContentList';
import { Button } from '@/components';
import { useSharedState } from '@/components/TablePlus/src/context';

export default function SettingContent() {
  const [{ columns = [] }, setState] = useSharedState();
  const columnsRef = useRef(columns);

  const handleReset = () => {
    setState((prev) => ({ ...prev, columns: columnsRef.current }));
  };
  return (
    <div>
      <SettingContentHeader />
      <SettingContentList />
      <div className="flex justify-end p-10">
        <Button onClick={handleReset} type="primary" size="small">
          重置
        </Button>
      </div>
    </div>
  );
}
