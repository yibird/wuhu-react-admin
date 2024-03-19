import React, { useMemo } from 'react';
import { DndContext, UniqueIdentifier, type DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { useSharedState } from '../../../../context';
import ContentListItem from './ContentListItem';
import { Column } from '@/components/TablePlus/src/types';

export default function ContentList() {
  const [{ columns = [] }, setState] = useSharedState();

  const getItems = useMemo(() => {
    return columns.map((item) => {
      return { ...item, id: item.key as UniqueIdentifier };
    });
  }, [columns]);

  const getChecked = (item: Column) => {
    if (typeof item.show === 'undefined') return true;
    if (typeof item.show === 'function') return item.show(item);
    return item.show;
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = getItems.findIndex((item) => item.key === active.id);
      const newIndex = getItems.findIndex((item) => item.key === over.id);
      const columns = arrayMove(getItems, oldIndex, newIndex);
      setState((prev) => ({ ...prev, columns }));
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={getItems} strategy={verticalListSortingStrategy}>
        <ul className="max-h-200 overflow-y-auto overflow-x-hidden border-y border-x-0 border-solid border-[#f5f5f5]">
          {columns.map((item, index) => {
            return (
              <ContentListItem
                key={index}
                index={index}
                data={item}
                id={item.key as UniqueIdentifier}
                checked={getChecked(item)}
                style={{
                  borderBottom: index === columns.length - 1 ? 'none' : '1px solid #f5f5f5',
                }}
              />
            );
          })}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
