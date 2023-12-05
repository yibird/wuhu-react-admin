import React, { ReactNode, useMemo, useState } from 'react';
import { Tooltip, Checkbox, Popover, Button } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { Icon } from '@/components';
import { useSharedState } from '../../../context';
import { isBool, isNull } from '@/utils/is';
import { DndContext } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useColumns } from '../../../hooks';
import type { Column } from '../../../types';
import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';

const options = [
  { label: '列显示', value: 'showColumn' },
  { label: '序号列', value: 'indexColumn' },
  { label: '选择列', value: 'selectionColumn' },
];

function ColumnSettingHeader() {
  const [{ showColumn }, setState] = useState({
    showColumn: true,
  });
  const [{ rowSelection = true, indexColumn = true }, setContextState] = useSharedState();
  const showRowSelection = useMemo(() => {
    return isBool(rowSelection) ? rowSelection : !isNull(rowSelection);
  }, [rowSelection]);

  const value = useMemo(() => {
    const arr = [
      { key: 'showColumn', value: showColumn },
      { key: 'indexColumn', value: indexColumn },
      { key: 'selectionColumn', value: showRowSelection },
    ];
    return arr.filter((item) => item.value).map((item) => item.key);
  }, [showColumn, showRowSelection, indexColumn]);

  const onChange = (value: CheckboxValueType[]) => {
    const indexColumn = value.includes('indexColumn');
    const rowSelection = value.includes('selectionColumn');
    setContextState((prev) => ({
      ...prev,
      indexColumn,
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
type FixedHandle = (index: number, column: Column, fixed: Fixed) => void;
export interface ColumnItemProps {
  index: number;
  column: Column;
  id: UniqueIdentifier;
  onChange?: () => void;
  onFixed?: FixedHandle;
}

function ColumnItem({ index, column, id, onChange, onFixed }: ColumnItemProps) {
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
    <li
      style={style}
      className="flex-y-center justify-between py-4 px-20 border-0 border-b last:border-b-0 border-solid border-[#f5f5f5]"
    >
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
          onClick={() => onFixed!(index, column, 'left')}
          size={22}
          name="skip-left-line"
        />
        <Icon
          color={getColor('right')}
          onClick={() => onFixed!(index, column, 'right')}
          size={22}
          name="skip-right-line"
        />
      </div>
    </li>
  );
}

interface ColumnListProps {
  columns: Column[];
  setColumns: (columns: Column[]) => void;
  setColumn: (index: number, column: Column) => void;
}

function ColumnList({ columns, setColumns, setColumn }: ColumnListProps) {
  const getItems = useMemo(() => {
    return columns.map((item) => {
      return { ...item, id: item.key as number | string };
    });
  }, [columns]);

  const onChange = (index: number, column: Column) => {
    setColumn(index, { ...column, show: !column.show });
  };

  const onFixed: FixedHandle = (index, column, fixed) => {
    if (column.fixed === fixed) return;
    setColumn(index, { ...column, fixed });
  };

  const handleDragEnd = (event: DragEndEvent) => {
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
        <ul className="max-h-200 overflow-y-auto overflow-x-hidden border-y border-x-0 border-solid border-[#f5f5f5]">
          {columns.map((column, index) => (
            <ColumnItem
              key={column.key}
              index={index}
              id={column.key as UniqueIdentifier}
              column={column}
              onChange={() => onChange(index, column)}
              onFixed={onFixed}
            />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}

function ColumnSettingContent() {
  const { columns, setColumns, setColumn, resetColumns } = useColumns();
  return (
    <div>
      <ColumnSettingHeader />
      <ColumnList columns={columns} setColumns={setColumns} setColumn={setColumn} />
      <div className="flex justify-end p-10">
        <Button onClick={resetColumns} type="primary" size="small">
          重置
        </Button>
      </div>
    </div>
  );
}

function Setting() {
  const [{ action }] = useSharedState();
  if (Array.isArray(action) && !action.includes('setting')) return;
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
export default Setting;
