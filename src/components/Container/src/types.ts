import type { ReactNode } from 'react';

export interface CollapseHaderProps extends BaseProps {
  /**
   * @desc 头部标题插槽
   * @default
   */
  title?: ReactNode;

  /**
   * @desc 头部操作插槽
   * @default
   */

  action?: ReactNode;
}

export interface CollapseContainerProps extends BaseProps {
  /**
   * @desc 展开时是否开启loading
   * @default false
   */
  loading?: boolean;
  /**
   * @desc 是否允许展开
   * @default true
   */
  canExpan?: boolean;
  /**
   * @desc 扩展和收缩时是否触发window.resize,可以适应表格和表格,当表格收缩时,
   * 表格触发器会调整大小以适应高度
   * @default
   */
  triggerWindowResize?: boolean;
  /**
   * @desc 延迟loading时间
   * @default 0
   */
  lazyTime?: number;

  /**
   * @desc 头部标题插槽
   * @default
   */
  title?: ReactNode;

  /**
   * @desc 头部操作插槽
   * @default
   */

  action?: ReactNode;

  /**
   * @desc 折叠容器底部插槽
   * @default
   */
  footer?: ReactNode;
}
