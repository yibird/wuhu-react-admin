import React, { useRef } from "react";
import { useClickOutside } from "@/hooks/dom/useClickOutside";
function ClickOutsideComp() {
  const ref = useRef<HTMLDivElement>(null);
  const outside = useClickOutside(ref, () => {});
  return (
    <div style={{ width: 200, height: 200, border: "1px solid red" }} ref={ref}>
      123123123 {outside ? "true" : "false"}
    </div>
  );
}

export default ClickOutsideComp;
