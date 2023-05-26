import React from "react";
import Icon from "@/components/Icon";
import { useFullscreen } from "ahooks";
function FullScreen() {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(
    document.documentElement
  );
  return (
    <li
      onClick={toggleFullscreen}
      className="px-10 hover:bg-[#f6f6f6] cursor-pointer"
    >
      <Icon
        name={isFullscreen ? "fullscreen-exit-line" : "fullscreen-line"}
        size={18}
      />
    </li>
  );
}

export default FullScreen;
