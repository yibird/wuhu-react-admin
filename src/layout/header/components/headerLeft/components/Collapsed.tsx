import React from "react";
import Icon from "@/components/Icon";
import { useStoreSelector } from "@/store";

function Collapsed() {
  const { getCollaped, setCollapsed } = useStoreSelector.useApp();
  return (
    <div
      onClick={() => setCollapsed(!getCollaped())}
      className="inline px-10 hover:bg-[#f6f6f6] cursor-pointer h-full"
    >
      <Icon name="indent-decrease" size={18} />
    </div>
  );
}

export default Collapsed;
