import { ReactNode } from 'react';
import type { TableProps, TableColumnType, PaginationProps } from 'antd';
import type { TableRowSelection } from 'antd/es/table/interface';

export type TableSize = TableProps<object>['size'];
export type ToolbarValue =
  | 'stripe'
  | 'size'
  | 'setting'
  | 'import'
  | 'export'
  | 'refresh'
  | 'fullscreen';

export type Position = 'left' | 'center' | 'right';
export type Fixed = 'left' | 'right' | undefined;
export type RowSelection<T = object> = TableRowSelection<T>;
export type Scroll = TableProps<object>['scroll'];

export interface Column<T = object> extends TableColumnType<T> {
  /**
   * @desc 是否显示列
   * @default true
   */
  show?: boolean | ((column: T) => boolean);
  /**
   * @desc 是否允许导出
   * @default true
   */
  allowExport?: boolean | ((column: T) => boolean);
}

export interface TablePlusProps<RecordType = object>
  extends Omit<TableProps<RecordType>, 'title' | 'rowSelection' | 'pagination'> {
  /**
   * @desc 是否显示Table头,header由title、action、toolbar三部分组成
   * @default true
   */
  header?: boolean | ReactNode;
  /**
   * @desc Table Header标题,true表示使用默认标题
   * @default true
   */
  title?: boolean | ReactNode;
  /**
   * @desc Table Header Action,用于放置Table操作按钮,例如新增删除等操作
   * @default true
   */
  action?: boolean | ReactNode;
  /**
   * @desc Table Action位置
   * @default 'right'
   */
  actionPosition?: Position;
  /**
   * @desc Table 工具栏,true表示使用默认工具栏
   * @default true
   */
  toolbar?: boolean | ToolbarValue[] | React.ReactNode;
  /**
   * @desc Table列配置
   * @default []
   */
  columns?: Column<RecordType>[];
  /**
   * @desc Table选择行配置
   * @default true
   */
  rowSelection?: boolean | RowSelection<RecordType>;
  /**
   * @desc 分页
   * @default true
   */
  pagination?: boolean | PaginationProps;

  /**
   * @desc 是否选择列
   * @default true
   */
  enableSelectionColumn?: boolean;

  /**
   * @desc 是否启用序号列
   * @default true
   */
  enableIndexColumn?: boolean;

  /**
   * @desc table高度自适应
   * @default true
   */
  autoHeight?: boolean;
  /**
   * @desc 是否显示斑马线
   * @default true
   */
  stripe?: boolean;
  /**
   * @desc 操作列
   * @default
   */
  operation?: Column;
}
