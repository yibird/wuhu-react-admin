import type { ProjectConfig } from "#/config";

export type AppState = ProjectConfig;

export interface AppAction {
  setApp: (state: Partial<AppState>) => void;
  getCollaped: () => boolean;
  setCollapsed: (collapsed: boolean) => void;
  setThemeColor: (themeColor: string) => void;
  setMenuThemeColor: (theme: string) => void;
  setHeaderThemeColor: (theme: string) => void;
}

export type AppSlice = AppState & AppAction;
