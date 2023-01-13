export {};
declare global {
  type Nullable<T> = T | null;

  interface BaseProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }
}
