import type { DefaultComponent } from '@loadable/component';
import type { RouteObject } from 'react-router-dom';

export type Component = (props: unknown) => Promise<DefaultComponent<unknown>>;
export interface RouteMeta {
  /**
   * @desc 页面标题
   * @default
   */
  title?: string;
}
export type RouteObjectExtra = {
  key?: React.Key;
  nodeRef?: React.RefObject<any>;
  meta?: RouteMeta;
};
export type IRoute = RouteObject & RouteObjectExtra;
