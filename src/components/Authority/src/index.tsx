import React from 'react';
import { intersection } from 'lodash-es';
import type { AuthorityProps } from './types';

const permissions = ['add', 'del', 'update', 'list'];

export function Authority({ value, handle, children }: AuthorityProps) {
  if (handle !== undefined && !handle()) return;
  const values = Array.isArray(value) ? value : [value];
  if (intersection(permissions, values).length === 0) return;
  return children;
}
