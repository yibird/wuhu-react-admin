import React, { CSSProperties, useMemo } from 'react';
import type { StatusProps, StatusType } from './types';
import './index.css';

const types: Record<StatusType, string> = {
  primary: '#1677ff',
  success: '#52c41a',
  error: '#ff4d4f',
  warning: '#faad14',
};

function Status({
  type = 'primary',
  color,
  dotColor,
  size = '8px',
  children,
  className,
  style,
}: StatusProps) {
  const getStyle = useMemo(() => {
    const getSize = typeof size === 'number' ? `${size}px` : size;
    const statusStyle = {
      '--status-dot-color': dotColor || color || Reflect.get(types, type),
      '--status-dot-size': getSize,
      '--status-text-color': color,
      ...style,
    };
    return statusStyle as CSSProperties;
  }, [type, color, size, style]);
  return (
    <div className={`status ${className}`} style={getStyle}>
      <span>{children}</span>
    </div>
  );
}

export default Status;
