import React, { CSSProperties, forwardRef, useMemo } from 'react';
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

export const Icon = forwardRef<HTMLElement, IconProps>((props, ref) => {
  const {
    name,
    prefix = 'ri-',
    size = 16,
    color = 'inherit',
    hoverColor,
    className,
    style,
    onClick,
  } = props;
  const getClass = useMemo(() => {
    return clsx('cursor-pointer', prefix.concat(name), className);
  }, [name, prefix, className]);

  const getStyle = useMemo((): CSSProperties => {
    return {
      fontSize: typeof size === 'string' ? size : `${size}px`,
      color,
      display: 'inline-block',
      // verticalAlign: 'middle',
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
  const onKeyDown = () => {};

  return (
    <i
      ref={ref}
      className={getClass}
      style={getStyle}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
});
