export {};
declare global {
  type Nullable<T> = T | null;
  type NotNullable<T> = T extends null | undefined ? never : T;
  type Recordable<T = any> = Record<string, T>;
  type Noop = (...p: any) => void;
  type ValuesOf<T> = T[keyof T];
  interface Fn {
    (): void;
  }
  type AnyFunction = (...args: any[]) => any;

  interface BaseProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }
  declare type TimeoutHandle = ReturnType<typeof setTimeout>;
  declare type IntervalHandle = ReturnType<typeof setInterval>;
}
