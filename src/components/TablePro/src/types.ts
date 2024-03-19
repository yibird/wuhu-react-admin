import type { TableProps, TableColumnType, PaginationProps } from 'antd';
import type { TableRowSelection } from 'antd/es/table/interface';

export type TableSize = TableProps<object>['size'];
export type RowSelection<T = object> = TableRowSelection<T>;
export type Scroll = TableProProps<object>['scroll'];

export interface TableHeaderProps {
  header?: boolean | React.ReactNode;
}

export interface TableTitle {
  label: string;
  describe?: string;
}

export type ToolbarValue =
  | 'stripe'
  | 'size'
  | 'setting'
  | 'import'
  | 'export'
  | 'refresh'
  | 'fullscreen';

export type ActionPosition = 'left' | 'center' | 'right';

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

export interface OperateColumn extends Column {
  /**
   * @desc 是否显示操作列
   * @default true
   */
  show?: boolean;
}

export interface TableProProps<RecordType = object>
  extends Omit<TableProps<RecordType>, 'title' | 'rowSelection' | 'pagination'> {
  /**
   * @desc 是否显示Table头
   * @default true
   */
  header?: boolean | React.ReactNode;
  /**
   * @desc Table Header标题
   * @default
   */
  title?: boolean | React.ReactNode | TableTitle;
  /**
   * @desc Table Action设置
   * @default
   */
  action?: boolean | React.ReactNode;
  /**
   * @desc Table Action位置
   * @default 'right'
   */
  actionPosition?: ActionPosition;
  /**
   * @desc table右上角工具栏
   * @default true
   */
  toolbar?: boolean | ToolbarValue[] | React.ReactNode;
  /**
   * @desc 是否显示斑马线
   * @default true
   */
  stripe?: boolean;
  /**
   * @desc Table选择行配置
   * @default true
   */
  rowSelection?: boolean | RowSelection<RecordType>;
  /**
   * @desc 序号列配置,为true将自动生成序号列
   * @default true
   */
  indexColumn?: boolean;
  /**
   * @desc 操作列配置,为true将自动生成操作列
   * @default true
   */
  operateColumn?: boolean | OperateColumn | (() => React.ReactNode);
  /**
   * @desc table高度自适应
   * @default true
   */
  autoHeight?: boolean;

  /**
   * @desc Table列配置
   */
  columns?: Column<RecordType>[];

  /**
   * @desc 分页配置
   * @default
   */
  pagination?: PaginationProps | boolean;

  // ================ event
  // 分页事件
  onPaging?: (current: number, pageSize: number) => void;
  // 刷新事件
  onRefresh?: () => void;
  // 删除事件
  onDel?: () => void;
  // 取消删除事件
  onCannelDel?: () => void;
  // 确认删除事件
  onConfirmDel?: (keys: Array<number>) => void;
}

export interface TableContextProvider {
  title?: TableProProps['title'];
  size: TableSize;
  setSize?: (size: TableSize) => void;
  columns?: TableProProps['columns'];
  setColumns?: (columns: TableProProps['columns']) => void;
}
