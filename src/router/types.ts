import type { DefaultComponent } from '@loadable/component';
import type { RouteObject } from 'react-router-dom';

export type Component = (props: unknown) => Promise<DefaultComponent<unknown>>;
export type RouteObjectExtra = {
  key?: React.Key;
  nodeRef?: React.RefObject<any>;
  meta?: object;
};
export type IRoute = RouteObject & RouteObjectExtra;
