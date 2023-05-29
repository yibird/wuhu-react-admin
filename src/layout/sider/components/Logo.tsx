import React, { CSSProperties, useMemo } from "react";
import { useAppStore } from "@/store";
import { isWhite } from "@/utils/color";
export interface LogoProps {
  themeColor?: string;
  collapsed?: boolean;
}

const Logo: React.FC<LogoProps> = ({ themeColor, collapsed }) => {
  const { showLogo, appIcon } = useAppStore();
  const getStyle = useMemo((): CSSProperties => {
    return {
      backgroundColor: themeColor,
      color: isWhite(themeColor!) ? "#333" : "#fff",
    };
  }, [themeColor]);

  if (!showLogo) return null;
  return (
    <div className="flex-center h-50" style={getStyle}>
      <img src={appIcon} className="h-32 w-32" />
      {!collapsed && <span className="truncate text-20 ml-10">Wuhu-admin</span>}
    </div>
  );
};
Logo.displayName = "Logo";
export default Logo;
