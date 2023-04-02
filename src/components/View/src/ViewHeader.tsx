import React, { useMemo } from "react";

function ViewHeader({ children, style, className }: BaseProps) {
  const getStyle = useMemo(() => {
    return {
      width: "100%",
      backgroundColor: "#fff",
      padding: 10,
      ...style,
    };
  }, [style]);
  return (
    <div style={getStyle} className={className}>
      {children}
    </div>
  );
}

export default ViewHeader;
