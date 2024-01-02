import React, { useEffect } from 'react';

export interface CSSProperty {
  property: string;
  value: string | null;
  priority?: string | undefined;
}
export function useCSSVariable(
  propertys: CSSProperty[],
  target: HTMLElement = document.documentElement,
) {
  return () => {
    useEffect(() => {
      propertys.forEach((item) => {
        target.style.setProperty(item.property, item.value);
      });
    }, [propertys]);
  };
}
