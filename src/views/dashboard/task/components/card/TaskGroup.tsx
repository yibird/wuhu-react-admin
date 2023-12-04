import React from 'react';

import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { Space } from 'antd';
import TaskItem from './TaskItem';
function TaskGroup() {
  const items = [1, 2, 3];
  return (
    <DndContext>
      <SortableContext items={items}>
        <Space className="w-full" direction="vertical">
          {items.map((item) => {
            return <TaskItem id={item} />;
          })}
        </Space>
      </SortableContext>
    </DndContext>
  );
}

export default TaskGroup;
