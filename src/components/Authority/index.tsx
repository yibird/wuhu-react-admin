import React from 'react';
import { intersection } from 'lodash-es';

export interface AuthorityProps extends BaseProps {
  value: string | string[];
}
const permissions = ['add', 'del', 'update', 'list'];

export function Authority({ value, children }: AuthorityProps) {
  const values = Array.isArray(value) ? value : [value];
  if (intersection(permissions, values).length === 0) return;
  return children;
}
