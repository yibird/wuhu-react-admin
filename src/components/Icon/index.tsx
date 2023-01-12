import React, { CSSProperties, useMemo } from "react";

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

function Icon({
  name,
  prefix = "ri-",
  size = 16,
  color = "inherit",
  hoverColor,
  className,
  style,
  onClick,
}: IconProps) {
  prefix.concat(name);
  const getCls = useMemo((): string => {
    const hoverCls = hoverColor ? `!hover:text-[${hoverColor}]` : "";
    const clsArr = ["cursor-pointer", prefix.concat(name), hoverCls, className];
    return clsArr.join(" ");
  }, [name, prefix, hoverColor]);

  const getStyle = useMemo((): CSSProperties => {
    return {
      fontSize: typeof size === "string" ? size : `${size}px`,
      color,
      ...style,
    };
  }, [size, color]);
  return <i className={getCls} style={getStyle} onClick={onClick} />;
}

export default Icon;
