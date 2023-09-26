import React from "react";
import { Icon } from "@/components";

function Lock() {
  return (
    <li className="flex-y-center px-10 hover:bg-[#f6f6f6] cursor-pointer">
      <Icon name="lock-line" size={18} />
    </li>
  );
}
export default Lock;
