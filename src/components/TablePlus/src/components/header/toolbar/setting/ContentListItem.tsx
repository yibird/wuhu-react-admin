import React, { ReactNode, createElement, CSSProperties } from 'react';
import { Icon } from '@/components';
import { Checkbox, Tooltip } from 'antd';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { UniqueIdentifier } from '@dnd-kit/core';
import type { Column, Fixed } from '@/components/TablePlus/src/types';
import { useSharedState } from '@/components/TablePlus/src/context';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface ContentListItemProps {
  id: UniqueIdentifier;
  index: number;
  data: Column;
  checked?: boolean;
  style?: CSSProperties;
}

const options: Array<{ name: string; title: string; key: Fixed }> = [
  {
    name: 'skip-left-line',
    title: '左固定',
    key: 'left',
  },
  {
    name: 'skip-right-line',
    title: '右固定',
    key: 'right',
  },
];

export default function ContentListItem({
  id,
  index,
  data,
  checked = false,
  style = {},
}: ContentListItemProps) {
  const [{ columns = [] }, setState] = useSharedState();
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  });
  const getStyle = {
    ...style,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const renderTitle = createElement('span', null, [data.title as ReactNode]);
  const getColor = (fixed: Fixed) => (data.fixed === fixed ? '#1677ff' : '');

  // 选中/取消列
  const onChange = (e: CheckboxChangeEvent) => {
    // 选中
    const newColumns = columns.map((item, i) => {
      return i === index ? { ...item, show: e.target.checked } : item;
    });
    setState((prev) => ({ ...prev, columns: newColumns }));
  };

  // 选中/取消固定
  const onClick = (fixed: Fixed) => {
    fixed = data.fixed === fixed ? undefined : fixed;
    const newColumns = columns.map((item, i) => (i === index ? { ...item, fixed } : item));
    setState((prev) => ({ ...prev, columns: newColumns }));
  };

  return (
    <li style={getStyle} className="flex items-center justify-between px-10 py-2">
      {/* left */}
      <div className="flex-y-center">
        <span ref={setNodeRef} {...attributes} {...listeners}>
          <Icon className="cursor-move" size={20} name="drag-move-line" />
        </span>
        <Checkbox checked={checked} onChange={onChange} className="ml-8">
          {renderTitle}
        </Checkbox>
      </div>

      {/* right */}
      <div className="ml-10">
        {options.map((item) => {
          return (
            <Tooltip title={item.title} key={item.key}>
              <span>
                <Icon
                  key={item.key}
                  onClick={() => onClick(item.key)}
                  color={getColor(item.key)}
                  size={22}
                  name={item.name}
                />
              </span>
            </Tooltip>
          );
        })}
      </div>
    </li>
  );
}
