import {
  ThemeEnum,
  SiderModeEnum,
  TabThemeEnum,
  AnimationTypeEnum,
  HeaderActionBarEnum,
} from '@/enums';

export interface IMenu {
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
  children?: IMenu[];
  /**
   * @desc 是否为首页,仅在menu类型为1时生效
   * @default false
   */
  home?: boolean;

  /**
   * @desc 是否开启缓存
   * @default true
   */
  keepAlive?: boolean;
}

/**
 * 项目配置类型声明文件
 */

export interface SiderSetting {
  /**
   * @desc 侧边栏模式,默认扁平模式
   * @default SiderModeEnum.FLAT
   */
  mode: SiderModeEnum;
  /**
   * @desc 是否显示侧边栏
   * @default true
   */
  show: boolean;
  /**
   * @desc 侧边菜单是否固定
   * @default false
   */
  fixed: boolean;
  /**
   * @desc 是否显示logo
   * @default true
   */
  showLogo: boolean;
  /**
   * @desc 侧边菜单是否收缩
   * @default false
   */
  collapsed: boolean;
  /**
   * @desc 收缩侧边栏宽度
   * @default 60
   */
  collapsedWidth: number;
  /**
   * @desc 主题色
   * @default
   */
  themeColor: string;
  /**
   * @desc 菜单主题,默认MenuEnum.DARK
   * @default MenuEnum.DARK
   */
  menuTheme: MenuEnum;
}

export type HeaderActionBar = `${HeaderActionBarEnum}`;

export interface HeaderSetting {
  /**
   * @desc header主题
   * @default
   */
  theme: string;
  /**
   * @desc 是否固定header
   * @default true
   */
  fixed: boolean;
  /**
   * @desc 是否显示header
   * @default true
   */
  show: boolean;

  /**
   * @desc header右侧操作栏
   * @default ['search','translate','fullScreen','lockPage','setting']
   */
  actionBar: HeaderActionBar[];
  /**
   * @desc 是否显示面包屑
   * @default true
   */
  showBreadcrumb: boolean;
  /**
   * @desc 是否显示面包屑图标
   * @default false
   */
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
  animationType: AnimationTypeEnum;
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
  theme: TabThemeEnum;
}

export interface FooterSetting {
  /**
   * @desc 是否显示Footer
   * @default false
   */
  show: boolean;
  /**
   * @desc 标题
   * @default
   */
  title?: string;
  /**
   * @desc 描述
   * @default
   */
  description?: string;
}

export interface LockSetting {
  /**
   * @desc 锁屏状态
   * @default  false
   */
  locked: boolean;
  /**
   * @desc 锁屏密码
   * @default
   */
  password: string;
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
  themeMode: ThemeEnum;
  /**
   * @desc 主题色
   */
  theme: string;
  /**
   * @desc 语言
   */
  locale: LocaleEnum;
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
  // 侧边栏配置
  sider: SiderSetting;
  // 头部配置
  header: HeaderSetting;
  // 动画配置
  animation: AnimationSetting;
  // 多标签页配置
  tabs: TabsSetting;
  // 底部配置
  footer: FooterSetting;
  // 锁屏配置
  lock: LockSetting;
  // 应用设置
  app: AppSetting;
}

export interface GlobConfig {}
