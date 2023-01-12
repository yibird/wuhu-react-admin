import React from "react";
import HeaderNavLeft from "./navLeft";
import HeaderNavRight from "./navRight";

function HeaderNav() {
  return (
    <div className="flex-y-center justify-between !h-50 !leading-50 box-border border-solid-b-#f5f5f5">
      <HeaderNavLeft />
      <HeaderNavRight />
    </div>
  );
}

export default HeaderNav;
