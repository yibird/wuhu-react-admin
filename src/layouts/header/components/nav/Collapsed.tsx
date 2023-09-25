import React from "react";
import Icon from "@/components/Icon";
import { useAppStore } from "@/store";

function Collapsed() {
  const { getCollapsed, setCollapsed } = useAppStore();
  return (
    <div
      onClick={() => setCollapsed(!getCollapsed())}
      className="inline px-10 hover:bg-[#f6f6f6] cursor-pointer h-full"
    >
      <Icon name="indent-decrease" size={18} />
    </div>
  );
}

export default Collapsed;
