import React, { ReactNode } from "react";
import { Button as AButton, ButtonProps as AButtonProps } from "antd";

export interface ButtonProps extends AButtonProps {
  color?: string;
  children?: ReactNode;
}

export function Button(props: ButtonProps) {
  return <AButton {...props}>{props.children}</AButton>;
}
