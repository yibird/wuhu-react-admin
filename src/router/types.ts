import type { DefaultComponent } from "@loadable/component";
import type { RouteObject } from "react-router-dom";
export type Component = (props: unknown) => Promise<DefaultComponent<unknown>>;

export type RouteExtraProps = {
    nodeRef?: React.RefObject<any>
}
export type IRoute = RouteObject & RouteExtraProps;