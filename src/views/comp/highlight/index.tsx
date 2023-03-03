import React from "react";
import { Highlight } from "@/components/Highlight";
function HighlightComp() {
  const content = `我是傻逼 我 我 我`;
  return (
    <div>
      <Highlight
        queries={`我`}
        content={content}
        highlightStyle={{
          backgroundColor: "red",
          fontSize: "20px",
        }}
      ></Highlight>
    </div>
  );
}

export default HighlightComp;
