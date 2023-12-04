import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Status } from '@/components/Status';

function TaskItem({ id }: { id: number }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className="bg-white rounded-4 pt-5"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="p-10 text-15 font-bold">开发Wuhu-React-Admin</div>
      <Status className="px-10">进行中</Status>
      <div className="px-10 py-15 text-[#999] font-400">
        哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈
      </div>
      <div
        className="flex-between items-center px-10 py-12"
        style={{ border: '1px solid #f5f5f5' }}
      >
        <div>2023-01-01 19:00:00</div>
        <div>时间</div>
      </div>
    </div>
  );
}

export default TaskItem;
