import React, { ReactNode, useContext, useMemo, useState } from 'react';
import { Tooltip, Checkbox, Divider, Popover, Button } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { Icon } from '@/components';

import { useSharedState } from '../../context';
import type { Column } from '../../types';
import { isBool, isNull } from '@/utils/is';

import { DndContext, useDraggable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { useColumns } from '../../hooks';

const options = [
  { label: '列显示', value: 'showColumn' },
  { label: '序号列', value: 'indexColumn' },
  { label: '选择列', value: 'selectionColumn' },
];

function ColumnSettingHeader() {
  const [{ showColumn }, setState] = useState({
    showColumn: true,
  });
  const [{ rowSelection = true, showIndexColumn = true }, setContextState] = useSharedState();
  const showRowSelection = useMemo(() => {
    return isBool(rowSelection) ? rowSelection : !isNull(rowSelection);
  }, [rowSelection]);

  const value = useMemo(() => {
    const arr = [
      { key: 'showColumn', value: showColumn },
      { key: 'indexColumn', value: showIndexColumn },
      { key: 'selectionColumn', value: showRowSelection },
    ];
    return arr.filter((item) => item.value).map((item) => item.key);
  }, [showColumn, showRowSelection, showIndexColumn]);

  const onChange = (value: CheckboxValueType[]) => {
    const showIndexColumn = value.includes('indexColumn');
    const rowSelection = value.includes('selectionColumn');
    setContextState((prev) => ({
      ...prev,
      showIndexColumn,
      rowSelection,
    }));
  };
  return (
    <div className="py-8 px-20 border-solid-b-#f5f5f5">
      <Checkbox.Group options={options} defaultValue={value} onChange={onChange} />
    </div>
  );
}

type Fixed = 'left' | 'right';
type FixedHandle = (column: Column, fixed: Fixed) => void;
export interface ColumnItemProps {
  column: Column;
  id: UniqueIdentifier;
  onChange?: () => void;
  onFixed?: FixedHandle;
}

function ColumnItem({ column, id, onChange, onFixed }: ColumnItemProps) {
  console.log('11111111111');
  const { title, show = true } = column;

  const renderTitle = useMemo(() => {
    return React.createElement('span', null, [title as ReactNode]);
  }, [title]);
  const checked = useMemo(() => (isBool(show) ? show : show(column)), [show]);

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const getColor = (fixed: Fixed) => {
    return column.fixed === fixed ? '#1677ff' : '';
  };

  return (
    <li style={style} className="flex-y-center justify-between py-4 px-20 border-solid-b-#f5f5f5">
      <div className="flex-y-center">
        <div ref={setNodeRef} {...attributes} {...listeners}>
          <Icon className="cursor-move" size={20} name="drag-move-line" />
        </div>
        <Checkbox checked={checked} onChange={onChange} className="ml-8">
          {renderTitle}
        </Checkbox>
      </div>
      <div>
        <Icon
          color={getColor('left')}
          onClick={() => onFixed!(column, 'left')}
          size={22}
          name="skip-left-line"
        />
        <Icon
          color={getColor('right')}
          onClick={() => onFixed!(column, 'right')}
          size={22}
          name="skip-right-line"
        />
      </div>
    </li>
  );
}

function ColumnList() {
  const { getColumns, setColumns } = useColumns();

  const getItems = useMemo(() => {
    return getColumns.map((item) => {
      return { ...item, id: item.key as string | number };
    });
  }, [getColumns]);

  const onChange = (index: number) => {
    const newColumns = getColumns.map((item, i) =>
      i === index ? { ...item, show: !item.show } : item,
    );
    setColumns(newColumns);
  };

  const onFixed: FixedHandle = (column, fixed) => {
    if (column.fixed === fixed) return;
    const columns = getColumns.map((item) => {
      return item.key === column.key ? { ...item, fixed } : item;
    });
    console.log(columns);
    setColumns(columns);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    console.log('1111');
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = getItems.findIndex((item) => item.key === active.id);
      const newIndex = getItems.findIndex((item) => item.key === over.id);
      setColumns(arrayMove(getItems, oldIndex, newIndex));
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={getItems} strategy={verticalListSortingStrategy}>
        <ul className="max-h-200 overflow-hidden">
          {getColumns.map((column, index) => (
            <ColumnItem
              key={column.key}
              id={column.key as UniqueIdentifier}
              column={column}
              onChange={() => onChange(index)}
              onFixed={onFixed}
            />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}

function ColumnSettingFooter() {
  const [{ oldColumns }, setState] = useSharedState();
  const onClick = () => {
    setState((prev) => ({ ...prev, columns: oldColumns }));
  };
  return (
    <div className="flex justify-end p-10">
      <Button onClick={onClick} type="primary" size="small">
        重置
      </Button>
    </div>
  );
}

function ColumnSettingContent() {
  return (
    <div>
      <ColumnSettingHeader />
      <ColumnList />
      <ColumnSettingFooter />
    </div>
  );
}

export function ColumnSetting() {
  return (
    <Tooltip title="列设置">
      <Popover
        content={<ColumnSettingContent />}
        placement="bottomRight"
        trigger={['click']}
        overlayClassName="popover"
      >
        <span>
          <Icon size={20} name="settings-line" />
        </span>
      </Popover>
    </Tooltip>
  );
}
