import React from 'react';
import { Segmented } from 'antd';
import { Button } from '@/components';
import TaskCard from './components/card';

function Task() {
  return (
    <div>
      <div className="flex-between items-center bg-white p-10">
        <Segmented defaultValue={'卡片'} options={['卡片', '列表', '甘特图']} />
        <div>
          <Button type="primary">添加任务</Button>
        </div>
      </div>
      <div className="p-10">
        <TaskCard />
      </div>
    </div>
  );
}

export default Task;
