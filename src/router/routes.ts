import React from 'react';
import { Navigate } from 'react-router-dom';
import loadable from '@loadable/component';
import type { IRoute } from '@/router';
import DefaultLayout from '@/layouts';

export const defaultRoutes: IRoute[] = [
  {
    path: '/',
    // element: React.createElement(loadable(() => import("@/layout"))),
    element: React.createElement(DefaultLayout),
    children: [
      {
        index: true,
        element: React.createElement(Navigate, { to: '/dashboard/analysis' }),
      },
      {
        path: '*',
        element: React.createElement(loadable(() => import('@/views/exception/notFound'))),
      },
    ],
  },
  {
    path: '/login',
    element: React.createElement(loadable(() => import('@/views/login'))),
    meta: {
      title: '登录',
    },
  },
  {
    path: '*',
    element: React.createElement(loadable(() => import('@/views/exception/notFound'))),
    meta: {
      title: '未知页面',
    },
  },
];
