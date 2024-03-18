import React from 'react';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';

export default function SettingContentList() {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={[]} strategy={verticalListSortingStrategy}>
        <ul className="max-h-200 overflow-y-auto overflow-x-hidden border-y border-x-0 border-solid border-[#f5f5f5]"></ul>
      </SortableContext>
    </DndContext>
  );
}
