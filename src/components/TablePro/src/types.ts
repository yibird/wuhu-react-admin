import { TableProps, TableColumnType } from 'antd';
import { TableRowSelection } from 'antd/es/table/interface';

export interface TableHeaderProps {
  header?: boolean | React.ReactNode;
}

export interface TableTitleProps {
  label: string;
  describe?: string;
}

export interface TableProActionProps {
  // 是否显示重新加载,默认true
  showReload: boolean;
  // 是否显示table大小设置,默认true
  showSizeSetting?: boolean;
  // 是否显示列导出,默认true
  showColExport?: boolean;
  // 是否显示列设置
  showColSetting?: boolean;
}

export interface Column<T> extends TableColumnType<T> {
  // 是否显示列
  show?: boolean | (() => boolean);
}

export interface TableProProps<RecordType = object>
  extends Omit<TableProps<RecordType>, 'title' | 'rowSelection'> {
  // table头设置
  header?: boolean;
  // table头标题
  title?: boolean | React.ReactNode | TableTitleProps;
  // table action设置
  tableAction?: boolean | React.ReactNode | TableProActionProps;

  columns?: Column<RecordType>[];
  // 默认true
  rowSelection: TableRowSelection<RecordType> | boolean;
  // 是否启用序号列
  enableSnColumn?: boolean;
}
export type TableSizeType = TableProProps['size'];

export interface TableContextProvider {
  title?: TableProProps['title'];
  size: TableSizeType;
  setSize?: (size: TableSizeType) => void;
  columns?: TableProProps['columns'];
  setColumns?: (columns: TableProProps['columns']) => void;
}
