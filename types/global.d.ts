export {};
declare global {
  type Nullable<T> = T | null;
  type Recordable<T = any> = Record<string, T>;
  type Noop = (...p: any) => void;

  interface BaseProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }
}
