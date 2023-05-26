import React from "react";
import Icon from "@/components/Icon";

interface TabNextProps extends BaseProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
function TabNext({ onClick, className, style }: TabNextProps) {
  return (
    <div onClick={onClick} style={style} className={className}>
      <Icon size={20} name="arrow-right-s-line" />
    </div>
  );
}

export default TabNext;
