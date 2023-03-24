export interface IMenuItem {
  id: number;
  title: string;
  // 0目录、1菜单、2权限按钮
  type: number;
  path?: string;
  parentId?: number | null;
  levelPath?: string;
  key?: Nullable<string>;
  icon?: Nullable<string>;
  children?: IMenuItem[];
  // 是否为首页,仅在menu类型为1时生效
  home?: boolean;
}

export const menus: IMenuItem[] = [
  {
    id: 1,
    title: "Dashboard",
    type: 1,
    path: "/",
    parentId: null,
    levelPath: "1",
    key: null,
    icon: "apps-line",
    children: [
      {
        id: 11,
        title: "分析页",
        path: "dashboard/analysis",
        type: 2,
        parentId: 1,
        levelPath: "1-11",
        home: true,
      },
      {
        id: 12,
        title: "工作台",
        path: "dashboard/workbench",
        type: 2,
        parentId: 1,
        levelPath: "1-12",
      },
    ],
  },
  {
    id: 2,
    title: "权限管理",
    type: 1,
    path: "",
    parentId: null,
    levelPath: "2",
    key: null,
    icon: "apps-line",
    children: [],
  },
  {
    id: 3,
    title: "组件",
    type: 1,
    path: "",
    parentId: null,
    levelPath: "3",
    key: null,
    icon: "apps-line",
    children: [
      {
        id: 31,
        title: "Button",
        type: 2,
        path: "comp/button",
        parentId: 3,
        levelPath: "3-31",
        key: null,
        icon: "apps-line",
        children: [],
      },
      {
        id: 32,
        title: "Watermark",
        type: 2,
        path: "comp/watermark",
        parentId: 3,
        levelPath: "3-32",
        key: null,
        icon: "apps-line",
        children: [],
      },
      {
        id: 33,
        title: "ScrollBar",
        type: 2,
        path: "comp/scrollBar",
        parentId: 3,
        levelPath: "3-33",
        key: null,
        icon: "apps-line",
        children: [],
      },
      {
        id: 34,
        title: "Table",
        type: 2,
        path: "comp/table",
        parentId: 3,
        levelPath: "3-34",
        key: null,
        icon: "apps-line",
        children: [],
      },
      {
        id: 35,
        title: "Form",
        type: 2,
        path: "comp/form",
        parentId: 3,
        levelPath: "3-35",
        key: null,
        icon: "apps-line",
        children: [],
      },
      {
        id: 36,
        title: "Highlight",
        type: 2,
        path: "comp/highlight",
        parentId: 3,
        levelPath: "3-36",
        key: null,
        icon: "apps-line",
        children: [],
      },
      {
        id: 37,
        title: "Example",
        type: 2,
        path: "comp/example",
        parentId: 3,
        levelPath: "3-37",
        key: null,
        icon: "apps-line",
        children: [],
      },
    ],
  },
  {
    id: 4,
    title: "Hooks",
    type: 1,
    path: "",
    parentId: null,
    levelPath: "4",
    key: null,
    icon: "apps-line",
    children: [
      {
        id: 41,
        title: "useClickOutside",
        type: 2,
        path: "hooks/clickOutside",
        parentId: 4,
        levelPath: "4-41",
        key: null,
        icon: "apps-line",
      },
    ],
  },
];
