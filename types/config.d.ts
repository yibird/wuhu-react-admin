import { MenuModeEnum } from '@/enums/menu';
import { ThemeEnum } from '@/enums';

export type ThemeMode = ThemeEnum.LIGHT | ThemeEnum.DARK;

export interface IMenuItem {
  /**
   * @desc 菜单id
   * @default
   */
  id: number;
  /**
   * @desc 菜单标题
   * @default
   */
  title: string;
  /**
   * @desc 菜单类型,0目录、1菜单项、2权限按钮
   * @default
   */
  type: number;
  /**
   * @desc 菜单跳转路径,仅在菜单类型为1时生效
   * @default
   */
  path?: string;
  /**
   * @desc 当前菜单的父级id,为空表示一级菜单
   * @default
   */
  parentId?: number | null;
  /**
   * @desc 菜单级别路径,由父级id和当前菜单id组成,元素之间使用 - 号分割
   */
  levelPath?: string;
  /**
   * @desc 菜单标识
   * @default
   */
  key?: Nullable<string>;
  /**
   * @desc 菜单图标
   * @default
   */
  icon?: Nullable<string>;
  /**
   * @desc 子菜单
   * @default
   */
  children?: IMenuItem[];
  /**
   * @desc 是否为首页,仅在menu类型为1时生效
   * @default false
   */
  home?: boolean;
}

/**
 * 项目配置类型声明文件
 */

export interface MenuSetting {
  /**
   * @desc 是否显示侧边栏
   * @default true
   */
  showSide: boolean;
  /**
   * @desc 侧边菜单主题色
   * @default
   */
  themeColor: string;
  /**
   * @desc 侧边菜单是否固定
   */
  fixed: boolean;
  // 侧边菜单是否显示
  show: boolean;
  // 侧边菜单是否收缩
  collapsed: boolean;
  // 收缩侧边栏宽度
  collapsedWidth: number;
  /**
   * @desc 侧边菜单宽度
   */
  menuWidth: number;
  /**
   * @desc 菜单模式
   * @default
   */
  mode: MenuModeEnum;
}

export interface HeaderSetting {
  // header主题色
  themeColor: string;
  // 是否固定header
  fixed: boolean;
  // 是否显示header
  show: boolean;
  // 是否显示搜索
  showSearch: boolean;
  // 是否显示通知
  showNotice: boolean;
  // 是否显示翻译
  showTranslate: boolean;
  // 是否显示全屏
  showFullScreen: boolean;
  // 是否显示锁屏
  showLockPage: boolean;
  // 是否显示设置
  showSetting: boolean;
  // 是否显示面包屑
  showBreadcrumb: boolean;
  // 是否显示面包屑图标
  showBreadCrumbIcon: boolean;
}

export interface AnimationSetting {
  /**
   * @desc 是否启用顶部进度条
   * @default true
   */
  topProgressBar: boolean;
  /**
   * @desc 是否启用切换动画
   * @default true
   */
  enableAnimation: boolean;
  /**
   * @desc 切换动画类型
   * @default
   */
  animationType: string;
}

export interface TabsSetting {
  /**
   * @desc 是否显示tabs
   * @default true
   */
  show: boolean;
  /**
   * @desc 主题
   * @default default
   */
  theme: string;
}

export interface AppSetting {
  /**
   * @desc 应用名称
   */
  name: string;
  /**
   * @desc 应用logo
   */
  logo: string;
  /**
   * @desc 主题模式
   */
  themeMode: ThemeMode;
  /**
   * @desc 主题色
   */
  themeColor: string;
  /**
   * @desc 语言
   */
  locale: string;
  /**
   * @desc 是否显示logo
   * @default true
   */
  showLogo: boolean;
  /**
   * @desc 是否显示footer
   * @default false
   */
  showFooter: boolean;
  /**
   * @desc 是否启用页面缓存
   * @default true
   */
  pageCache: boolean;
}

/**
 * 项目配置
 */
export interface ProjectConfig {
  // 侧边菜单配置
  menuSetting: MenuSetting;
  // 头部配置
  headerSetting: HeaderSetting;
  // 动画配置
  animation: AnimationSetting;
  // 多标签页配置
  tabs: TabsSetting;
  // 应用设置
  app: AppSetting;
}

export interface GlobConfig {}
