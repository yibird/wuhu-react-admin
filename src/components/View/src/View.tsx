import React, { useMemo } from "react";
import ViewSider from "./ViewSider";
import ViewHeader from "./ViewHeader";
import ViewContent from "./ViewContent";
import { Space } from "antd";

type Direction = "horizontal" | "vertical";
interface ViewProps extends BaseProps {
  direction?: Direction;
  full?: boolean;
  span?: number;
}
function View({
  direction = "horizontal",
  full = true,
  span,
  children,
  className,
  style,
}: ViewProps) {
  const getStyle = useMemo(() => {
    return {
      height: "100%",
      width: "100%",
      ...style,
    };
  }, [style]);

  return (
    <Space style={getStyle} className="ant-space-full">
      {children}
    </Space>
  );
}
View.ViewSider = ViewSider;
View.ViewHander = ViewHeader;
View.ViewContent = ViewContent;
export default View;
