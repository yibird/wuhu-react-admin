import React from 'react';
import { Navigate } from 'react-router-dom';
import loadable, { DefaultComponent } from '@loadable/component';
import DefaultLayout from '@/layouts';
import type { IRoute } from '@/router';

import Redirect from '@/router/components/Redirect';

export const defaultRoutes: IRoute[] = [
  {
    path: '/',
    element: React.createElement(DefaultLayout),
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
    path: '/login',
    element: createElement(() => import('@/views/login')),
    // React.createElement(loadable(() => import('@/views/login'))),
    meta: {
      title: '登录',
    },
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
