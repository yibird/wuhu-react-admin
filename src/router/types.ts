import { DefaultComponent } from "@loadable/component";

export type Component = (props: unknown) => Promise<DefaultComponent<unknown>>;
