import React, { CSSProperties, useMemo } from 'react';
import clsx from 'clsx';

export interface IconProps {
  name: string;
  prefix?: string;
  size?: number | string;
  color?: string;
  hoverColor?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export function Icon({
  name,
  prefix = 'ri-',
  size = 16,
  color = 'inherit',
  hoverColor,
  className,
  style,
  onClick,
}: IconProps) {
  const getCls = useMemo(() => {
    return clsx('cursor-pointer', prefix.concat(name), className);
  }, [name, prefix, className]);

  const getStyle = useMemo((): CSSProperties => {
    return {
      fontSize: typeof size === 'string' ? size : `${size}px`,
      color,
      ...style,
    };
  }, [size, color]);

  const onMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    if (hoverColor) {
      e.currentTarget.style.color = hoverColor;
    }
  };
  const onMouseOut = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = color;
  };
  return (
    <i
      className={getCls}
      style={getStyle}
      onClick={onClick}
      onKeyDown={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
}
