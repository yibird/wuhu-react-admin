import React from "react";
import Collapsed from "./Collapsed";
import Breadcrumb from "./Breadcrumb";

function HeaderNav() {
  return (
    <div className="flex-y-center h-full">
      <Collapsed />
      <Breadcrumb />
    </div>
  );
}

export default HeaderNav;
