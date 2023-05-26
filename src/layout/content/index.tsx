import React, { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
function LayoutContent() {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  return (
    <div className="flex-1 p-10 overflow-auto">
      <CSSTransition nodeRef={nodeRef} in={inProp} timeout={200}>
        <Outlet />
      </CSSTransition>
    </div>
  );
}

export default LayoutContent;
