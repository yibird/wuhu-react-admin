import React, { CSSProperties, useMemo } from "react";
import { useStoreSelector } from "@/store";
import { isWhite } from "@/utils/color";

const src = "https://vben.vvbin.cn/assets/logo.63028018.png";
export interface LogoProps {
  themeColor?: string;
  collapsed?: boolean;
}

function Logo({ themeColor, collapsed }: LogoProps) {
  const { showLogo } = useStoreSelector.useApp();
  if (!showLogo) return null;

  const getStyle = useMemo((): CSSProperties => {
    return {
      backgroundColor: themeColor,
      color: isWhite(themeColor!) ? "#333" : "#fff",
    };
  }, [themeColor]);

  return (
    <div className="flex-center h-50" style={getStyle}>
      <img src={src} className="h-32 w-32" />
      {!collapsed && <span className="truncate text-20 ml-10">Wuhu-admin</span>}
    </div>
  );
}

export default Logo;
