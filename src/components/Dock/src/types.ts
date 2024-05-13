export interface DockItem {
  id: string | number;
  icon: string;
  title?: string;
}

export interface DockProps extends BaseProps {
  items?: DockItem[];
  position?: 'top' | 'bottom' | 'left' | 'right';
  onClick?: (item: DockItem) => void;
}
