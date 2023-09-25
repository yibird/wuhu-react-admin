import React from 'react';
import { BasicTitle, BasicArrow } from '@/components/Basic';
import type { CollapseHaderProps } from '../types';

export function CollapseHader({ title, action }: CollapseHaderProps) {
  return (
    <div className="flex-y-center h-32 bg-white m-10 px-6">
      <BasicTitle>标题</BasicTitle>
      <div className="flex-y-center flex-1 text-right justify-end">
        <BasicArrow />
      </div>
    </div>
  );
}
