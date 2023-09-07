import type { ProjectConfig } from '#/config';

export type AppState = ProjectConfig;

export interface AppAction {
  setState: (state: Partial<AppState>) => void;
  getCollaped: () => boolean;
  setCollapsed: (collapsed: boolean) => void;
  setThemeColor: (themeColor: string) => void;
  setMenuThemeColor: (themeColor: string) => void;
  setHeaderThemeColor: (theme: string) => void;
  setAnimation: (animation: ProjectConfig['animation']) => void;

  setLocale: (locale: string) => void;
}

export type AppSlice = AppState & AppAction;
