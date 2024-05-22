export interface IMProps extends BaseProps {
  open?: boolean;
  zIndex?: number;
  movable?: boolean;
}

export interface IMFloatButtonProps extends BaseProps {
  zIndex?: number;
  movable?: boolean;
  onClick?: () => void;
}

export interface IMDialogProps extends BaseProps {
  width?: number | string;
  height?: number | string;
  zIndex?: number;
  open?: boolean;
}
