import type { DefaultComponent } from '@loadable/component';
import type { RouteObject } from 'react-router-dom';
import { MutableRefObject } from 'react';
import { IMenuItem } from '@/common/menus';

export type Component = (props: unknown) => Promise<DefaultComponent<unknown>>;

export interface ReouteMate {
  title: string;
  menu?: IMenuItem;
}

export interface ExtraRouteObject {
  meta?: Partial<ReouteMate>;
}

export type IRoute = RouteObject & ExtraRouteObject;
