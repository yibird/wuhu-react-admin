import React from "react";
import Collapsed from "./components/Collapsed";
import Breadcrumb from "./components/Breadcrumb";

function HeaderLeft() {
  return (
    <div className="flex-y-center h-full">
      <Collapsed />
      <Breadcrumb />
    </div>
  );
}

export default HeaderLeft;
