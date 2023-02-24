export {};
declare global {
  type Nullable<T> = T | null;
  type Recordable<T = any> = Record<string, T>;

  interface BaseProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }
}
