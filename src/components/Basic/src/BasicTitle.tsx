import React, { useMemo } from 'react';
import clsx from 'clsx';
import { BasicHelp } from './BasicHelp';
import type { BasicTitleProps } from './types';
import './title.css';

export function BasicTitle({ helpMessage, normal, block, children }: BasicTitleProps) {
  const getCls = useMemo(() => {
    return clsx({
      'basic-title--normal': normal,
      'basic-title--block': block && children,
    });
  }, [normal, block]);
  return (
    <span className={`basic-title ${getCls}`}>
      {children}
      {helpMessage && <BasicHelp />}
    </span>
  );
}
