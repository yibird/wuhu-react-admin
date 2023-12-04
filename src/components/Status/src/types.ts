export type StatusType = 'primary' | 'success' | 'error' | 'warning';

export interface StatusProps extends BaseProps {
  /**
   * @desc 状态类型
   * @default 'primary'
   */
  type?: string;
  /**
   * @desc 自定义颜色,优先级高于color
   * @default
   */
  color?: string;
  /**
   * @desc 状态dot颜色,不传则使用color
   * @default
   */
  dotColor?: string;
  /**
   * @desc 状态dot大小
   * @default '8px'
   */
  size?: number | string;
}
