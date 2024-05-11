import type { DefaultComponent } from '@loadable/component';
import { ComponentType, ReactNode } from 'react';
import type { RouteObject } from 'react-router-dom';

export type Component = (props: unknown) => Promise<DefaultComponent<unknown>>;
export interface RouteMeta {
  /**
   * @desc 页面标题
   * @default
   */
  title?: string;
}
export interface RouteGuard {
  /**
   * 路由前置守卫
   * @param to 目标路由
   * @param from 上一个路由
   * @returns 一个布尔值,false表示取消当前导航
   */
  beforeEach?: (to?: IRoute, from?: IRoute) => boolean;
  /**
   * 路由后置守卫
   * @param to 目标路由
   * @param from 上一个路由
   */
  afterEach?: (to?: IRoute, from?: IRoute) => void;
}
// export type RouteObjectExtra = {
//   key?: React.Key;
//   nodeRef?: React.RefObject<any>;
//   children?: IRoute[] | undefined;
//   meta?: RouteMeta;
// } & RouteGuard;

export interface IRoute extends Omit<RouteObject, 'children' | 'element'>, RouteGuard {
  element?: ReactNode | React.LazyExoticComponent<() => JSX.Element>;
  key?: string | number;
  nodeRef?: React.RefObject<any>;
  children?: IRoute[] | undefined;
  meta?: RouteMeta;
}

export interface AuthRouteProps extends RouteGuard {
  routes: IRoute[];
  children?: React.ReactNode;
}

export type LazyComponent = () => Promise<{ default: ComponentType<any> }>;
