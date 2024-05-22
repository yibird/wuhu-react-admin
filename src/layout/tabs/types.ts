import React from 'react';
import type { IMenu } from '#/config';

export interface TabControlProps extends BaseProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface TabListProps extends BaseProps {
  items?: IMenu[];
  current?: number;
  wrapperStyle?: React.CSSProperties;
  itemClass?: string;
  activeClass?: string;
  closeClass?: string;
  homeCls?: string;
  onChange?: (item: IMenu, index: number) => void;
  onClose?: (index: number) => void;
}
