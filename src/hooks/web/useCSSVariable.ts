import React, { useState, useEffect } from "react";

export function useCSSVariable(
  variable: string,
  initialValue: string,
  target?: HTMLElement
) {
  const [value, setValue] = useState(initialValue);
  const targetEl = target || document.documentElement;
  useEffect(() => {
    targetEl.style.setProperty(variable, value);
  }, [variable, value]);

  return [value, setValue];
}
