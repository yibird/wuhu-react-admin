import React from "react";
interface ViewContentProps extends BaseProps {}
function ViewContent({ children }: ViewContentProps) {
  return <div>{children}</div>;
}

export default ViewContent;
