import React from "react";
import Icon from "@/components/Icon";

interface TabPrevProps extends BaseProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function TabPrev({ onClick, className, style }: TabPrevProps) {
  return (
    <div onClick={onClick} style={style} className={className}>
      <Icon size={20} name="arrow-left-s-line" />
    </div>
  );
}

export default TabPrev;
