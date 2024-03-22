export interface SearchDataList {
  id: number;
  title: string;
  icon: string;
  description: string;
}
export interface SearchData {
  id: number;
  groupName: string;
  list: SearchDataList[];
}

export interface DialogHeaderRef {
  setValue: (value: string) => void;
  focus: () => void;
}

export interface SearchDialogProps {
  /**
   * @desc dialog 打开状态
   * @default false
   */
  open?: boolean;
  /**
   * @desc dialog 宽度
   * @default 600
   */
  width?: number | string;
  /**
   * @desc dialog body高度
   * @default 500
   */
  bodyHeight?: number | string;
  /**
   * @desc dialog footer
   * @default
   */
  footer?: React.ReactNode;
  /**
   * @desc dialog footer style
   * @default
   */
  footerStyle?: React.CSSProperties;
  /**
   * @desc 是否在关闭时清空搜索值
   * @default true
   */
  clearOnClose?: boolean;
  /**
   * @desc dialog 关闭事件
   * @default
   */
  onClose?: () => void;
  /**
   * @desc input值变化事件
   * @default
   */
  onChange?: (value: string) => void;
  /**
   * @desc 清除input事件
   * @default
   */
  onClear?: () => void;
}

export interface DialogHeaderProps extends Pick<SearchDialogProps, 'onChange' | 'onClear'> {
  initialValue?: string;
  onClose?: () => void;
}

export type DialogFooterProps = Pick<SearchDialogProps, 'footer' | 'footerStyle'>;
