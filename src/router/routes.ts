import React from 'react';
import { Navigate } from 'react-router-dom';
import loadable, { DefaultComponent } from '@loadable/component';
import Layout from '@/layout';
import type { IRoute } from '@/router';

import Redirect from '@/router/components/Redirect';

export const defaultRoutes: IRoute[] = [
  {
    path: '/login',
    element: createElement(() => import('@/pages/login')),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/lockScreen',
    element: createElement(() => import('@/pages/lockScreen')),
    meta: {
      title: '锁屏',
    },
  },
  {
    path: '/',
    element: React.createElement(Layout),
    children: [
      {
        index: true,
        element: React.createElement(Navigate, { to: '/dashboard/analysis' }),
      },
      {
        path: '*',
        element: createElement(() => import('@/views/exception/notFound')),
      },
    ],
  },
  {
    path: '/redirect',
    element: createElement(() => import('@/router/components/Redirect')),
  },
  {
    path: '*',
    element: createElement(() => import('@/views/exception/notFound')),
    meta: {
      title: '未知页面',
    },
  },
];

function createElement(comp: any) {
  return React.createElement(loadable(comp));
}
