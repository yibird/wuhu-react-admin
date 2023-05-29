import type { DefaultComponent } from "@loadable/component";
import type { RouteObject } from "react-router-dom";
import { MutableRefObject } from "react";

export type Component = (props: unknown) => Promise<DefaultComponent<unknown>>;

export interface ReouteMate {
  title: string;
}

export interface ExtraRouteObject {
  meta?: Partial<ReouteMate>;
  nodeRef?: MutableRefObject<any>;
}

export type IRoute = RouteObject & ExtraRouteObject;
