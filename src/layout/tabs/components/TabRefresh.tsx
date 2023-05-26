import React from "react";
import Icon from "@/components/Icon";

interface TabRefreshProps extends BaseProps {}

function TabRefresh({ style, className }: TabRefreshProps) {
  return (
    <div style={style} className={className}>
      <Icon size={18} name="refresh-line" />
    </div>
  );
}

export default TabRefresh;
