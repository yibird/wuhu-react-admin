import React from "react";
import { Outlet } from "react-router-dom";

function LayoutContent() {
  return (
    <div className="flex-1">
      <Outlet />
    </div>
  );
}

export default LayoutContent;
