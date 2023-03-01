import React from "react";
import { Scrollbar } from "@/components/Scroll";

function ScrollComp() {
  return (
    <div>
      <div>123123</div>
      <Scrollbar wrapStyle={{ height: "100px" }}>
        <li>12312312312</li>
        <li>12312312312</li>
        <li>12312312312</li>
        <li>12312312312</li>
        <li>12312312312</li>
        <li>12312312312</li>
        <li>12312312312</li>
        <li>12312312312</li>
        <li>12312312312</li>
        <li>12312312312</li>
        <li>12312312312</li>
        <li>12312312312</li>
      </Scrollbar>
    </div>
  );
}

export default ScrollComp;
