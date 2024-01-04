export interface RightClickMenuItemProps extends React.PropsWithChildren {
  type: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
}

export interface RightClickMenuProps {
  items?: RightClickMenuItemProps[];
  onClick?: () => void;
}
