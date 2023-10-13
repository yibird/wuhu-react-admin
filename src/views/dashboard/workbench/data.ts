import { Project, Team, QuickActions, WorkbenchData } from './types';

const projects: Project[] = [
  {
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    name: 'Alipay',
    describe: '那是一种内在的东西，他们到达不了，也无法触及的',
    master: 'zchengfeng',
    createAt: '2020-02-02',
  },
  {
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    name: 'Angular',
    describe: '那是一种内在的东西，他们到达不了，也无法触及的',
    master: 'zchengfeng',
    createAt: '2020-02-02',
  },
  {
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    name: 'Ant Design',
    describe: '那是一种内在的东西，他们到达不了，也无法触及的',
    master: 'zchengfeng',
    createAt: '2020-02-02',
  },
  {
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    name: 'Ant Design Pro',
    describe: '那是一种内在的东西，他们到达不了，也无法触及的',
    master: 'zchengfeng',
    createAt: '2020-02-02',
  },
  {
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    name: 'Bootstrap',
    describe: '那是一种内在的东西，他们到达不了，也无法触及的',
    master: 'zchengfeng',
    createAt: '2020-02-02',
  },
  {
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    name: 'React',
    describe: '那是一种内在的东西，他们到达不了，也无法触及的',
    master: 'zchengfeng',
    createAt: '2020-02-02',
  },
];

const teams: Team[] = [
  {
    id: 1,
    name: 'Github团队',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 2,
    name: 'Antd官方团队',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 3,
    name: 'Wuhu团队',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 4,
    name: 'React团队',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 5,
    name: 'Vue官方团队',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 6,
    name: 'Solid团队',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
];
const quickActions: QuickActions[] = [
  {
    id: 1,
    name: '首页',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 2,
    name: '仪表盘',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 3,
    name: '系统管理',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 4,
    name: '权限管理',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 5,
    name: '首页',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 6,
    name: '仪表盘',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 7,
    name: '系统管理',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
  {
    id: 8,
    name: '权限管理',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
  },
];

export const data: WorkbenchData = {
  projects,
  teams,
  quickActions,
};
