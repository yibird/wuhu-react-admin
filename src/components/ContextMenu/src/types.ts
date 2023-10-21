import React from 'react';

export interface ActionOptions {
  id: string;
  event: MouseEvent;
}

export interface TriggerProps {
  id: string;
  children?: React.ReactNode;
}

export interface ContextMenuItem {
  type: string;
  icon?: React.ReactNode;
  title?: string | React.ReactNode;
  suffix?: React.ReactNode;
  children?: ContextMenuItem[];
}

export interface ContextMenuProps extends BaseProps {
  /**
   * @desc 菜单标识,用于关联触发器
   */
  id: string;
  /**
   * @desc 菜单配置项
   * @default []
   */
  items?: ContextMenuItem[];
  /**
   * @desc 动画
   * @default
   */
  animation?: string;
  /**
   * @desc 菜单z-index
   * @default 1000
   */
  zIndex?: number;
  /**
   * @desc 是否阻止滚动隐藏菜单
   * @default false
   */
  preventHideOnScroll?: boolean;
  /**
   * @desc 是否阻止窗口尺寸变化隐藏菜单
   * @default false
   */
  preventHideOnResize?: boolean;
  /**
   * 点击菜单项时触发的事件
   * @param eventType 事件类型
   * @returns
   */
  onContextMenu?: (item: ContextMenuItem, index: number) => void;
}
