export type Options = { event: PointerEvent; params: Record<string, any> };
export type HandleClick = (item: ContextmenuItemProps, params?: Record<string, any>) => void;

export interface TriggerProps {
  /**
   * @desc 触发器id,该id需要与菜单id一致
   * @default
   */
  id: string;
  /**
   * @desc 触发器传递给ContextMenu的参数
   * @default
   */
  params?: Record<string, any>;
  /**
   * @desc Trigger内部元素
   * @default
   */
  children: React.ReactNode;
  /**
   * @desc className
   * @default
   */
  className?: string;
  /**
   * @desc style
   * @default
   */
  style?: React.CSSProperties;
}

export interface ContextMenuType {
  /**
   * @desc 菜单项的id(唯一),用于区分点击菜单项
   * @default
   */
  id?: string;
  /**
   * @desc 渲染元素的类型,'divider'表示渲染分割线
   * @default
   */
  type?: 'divider';
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
  /**
   * @desc 子菜单项
   * @default
   */
  children?: ContextMenuType[];
}

export interface ContextmenuProps extends React.PropsWithChildren {
  /**
   * @desc 菜单id,该id需要与菜单触发器id一致
   * @default
   */
  id?: string;
  /**
   * @desc ContextMenu 配置项数组,优先级高于children
   */
  items?: ContextMenuType[];
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
  /**
   * @desc 点击菜单项触发的事件
   * @default
   */
  onClick?: HandleClick;
}

export interface ContextmenuItemProps extends Omit<ContextMenuType, 'type' | 'children'> {
  children?: React.ReactNode;
}
