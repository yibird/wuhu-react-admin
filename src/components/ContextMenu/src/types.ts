export interface ContextmenuProps extends React.PropsWithChildren {
  /**
   * @desc 菜单id,该id需要与菜单触发器id一致
   * @default
   */
  id?: string;
  /**
   * @desc 悬浮激活时字体颜色
   * @default #fff
   */
  activeColor?: string;
  /**
   * @desc 悬浮激活时菜单项背景色
   * @default
   */
  activeBgColor?: string;
  /**
   * @desc 挂载目标节点,默认挂载到document.body,为false或为空时正常渲染
   * @default document.body
   */
  mountTarget?: boolean | Element | DocumentFragment;
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
}

export interface TriggerProps extends React.PropsWithChildren {
  /**
   * @desc 触发器id,该id需要与菜单id一致
   * @default
   */
  id: string;
}

export interface ContextmenuItemProps extends React.PropsWithChildren {
  /**
   * @desc 是否禁用菜单项
   * @default false
   */
  disabled?: boolean;
  /**
   * @desc icon
   * @default
   */
  icon?: React.ReactNode;
  /**
   * @desc 菜单项标题,如果为空则使用children
   * @default
   */
  title?: React.ReactNode;
  /**
   * @desc 菜单项后缀,子菜单该配置无效
   * @default
   */
  suffix?: React.ReactNode;
}
