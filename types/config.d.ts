import { MenuModeEnum } from "@/enums/menu";

/**
 * 项目配置类型声明文件
 */
export interface MenuSetting {
  // 是否显示
  showSider: boolean;
  // 侧边菜单主题色
  themeColor: string;
  // 侧边菜单是否固定
  fixed: boolean;
  // 侧边菜单是否显示
  show: boolean;
  // 侧边菜单是否收缩
  collapsed: boolean;
  // 收缩侧边栏宽度
  collapsedWidth: number;
  // 侧边菜单宽度
  menuWidth: number;
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
  showSettig: boolean;
  // 是否显示面包屑
  showBreadcrumb: boolean;
  // 是否显示面包屑图标
  showBreadCrumbIcon: boolean;
}

export interface ProjectConfig {
  menuSetting: MenuSetting;
  headerSetting: HeaderSetting;
  // 是否显示logo
  showLogo: boolean;
  // 是否显示footer
  showFooter: boolean;

  // 系统主题色
  themeColor: string;
}

export interface GlobConfig {}
