import React, { useMemo } from "react";
import { Button as AButton, ButtonProps as AButtonProps } from "antd";
import "./index.css";
import clsx from "clsx";

export type ButtonExtraType = "success" | "error" | "warning";
export type ButtonType = AButtonProps["type"] | ButtonExtraType;

export interface ButtonProps extends Omit<AButtonProps, "type"> {
  type?: ButtonType;
}

function Button(props: ButtonProps & BaseProps) {
  const { type, className, style, children } = props;

  const getCls = useMemo(() => {
    return clsx(`ant-btn-${type}`, className);
  }, [type, className]);

  return (
    // @ts-ignore
    <AButton {...props} className={getCls} style={style}>
      {children}
    </AButton>
  );
}
Button.displayName = "Button";
export default Button;
