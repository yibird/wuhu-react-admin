import React from "react";
interface ViewHeaderProps extends BaseProps {}
function ViewHeader({ children, style, className }: ViewHeaderProps) {
  return <div style={{ border: "1px solid red" }}>{children}</div>;
}

export default ViewHeader;
