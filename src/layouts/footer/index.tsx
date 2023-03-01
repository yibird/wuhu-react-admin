import React from "react";
import { useStoreSelector } from "@/store";

function LayoutFooter() {
  const { showFooter } = useStoreSelector().app;
  if (!showFooter) return null;
  return <div>footer</div>;
}

export default LayoutFooter;
