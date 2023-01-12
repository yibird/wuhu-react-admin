import React from "react";
import Icon from "@/components/Icon";

function FullScreen() {
  return (
    <li className="px-10 hover:bg-[#f6f6f6] cursor-pointer">
      {/* fullscreen-exit-line */}
      <Icon name="fullscreen-line" size={18} />
    </li>
  );
}

export default FullScreen;
