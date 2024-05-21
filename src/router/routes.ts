import React from 'react';
import Layout from '@/layout';
import { createElement } from './help';
import type { IRoute } from '@/router';
import Redirect from '@/router/components/Redirect';

export const routes: IRoute[] = [
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
        path: '/forbidden',
        element: createElement(() => import('@/views/exception/forbidden')),
        meta: {
          title: '未授权',
        },
        nodeRef: React.createRef(),
      },
      {
        path: '*',
        element: createElement(() => import('@/views/exception/notFound')),
        meta: {
          title: '未知页面',
        },
        nodeRef: React.createRef(),
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
