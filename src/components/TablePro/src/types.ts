import { TableProps, TableColumnType, PaginationProps } from 'antd';
import { TableRowSelection } from 'antd/es/table/interface';

export interface TableHeaderProps {
  header?: boolean | React.ReactNode;
}

export type RowSelection<T = object> = TableRowSelection<T>;

export interface TableTitleProps {
  label: string;
  describe?: string;
}

export interface TableProActionProps {
  // 是否显示重新加载,默认true
  showReload?: boolean;
  // 是否显示table大小设置,默认true
  showSizeSetting?: boolean;
  // 是否显示列导出,默认true
  showColExport?: boolean;
  // 是否显示列设置
  showColSetting?: boolean;
}

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

export interface TableProProps<RecordType = object>
  extends Omit<TableProps<RecordType>, 'title' | 'rowSelection' | 'pagination'> {
  /**
   * @desc 是否显示Table头
   */
  header?: boolean | React.ReactNode;
  /**
   * @desc Table Header标题
   */
  title?: boolean | React.ReactNode | TableTitleProps;
  /**
   * @desc Table Action设置
   */
  tableAction?: boolean | React.ReactNode | TableProActionProps;
  /**
   * @desc Table列配置
   */
  columns?: Column<RecordType>[];
  /**
   * @desc Table选择行配置
   */
  rowSelection?: RowSelection<RecordType> | boolean;
  /**
   * @desc 是否显示序号列
   * @default true
   */
  showIndexColumn?: boolean;
  /**
   * @desc table高度自适应
   * @default true
   */
  autoHeight?: boolean;
  /**
   * @desc 分页配置
   * @default
   */
  pagination?: PaginationProps | boolean;

  // ================ event
  onPaging?: (current: number, pageSize: number) => void;
  onRefresh?: () => void;
}
export type TableSizeType = TableProProps['size'];

export interface TableContextProvider {
  title?: TableProProps['title'];
  size: TableSizeType;
  setSize?: (size: TableSizeType) => void;
  columns?: TableProProps['columns'];
  setColumns?: (columns: TableProProps['columns']) => void;
}
