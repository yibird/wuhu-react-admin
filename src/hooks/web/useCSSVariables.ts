import React from 'react';

export function useCSSVariables(target?: HTMLElement) {
  return function (variables: Record<string, string>) {
    const targetEl = target || document.documentElement;
    Object.keys(variables).forEach((key) => {
      targetEl.style.setProperty(key, variables[key]);
    });
  };
}
