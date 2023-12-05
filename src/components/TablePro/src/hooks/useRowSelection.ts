import { useState } from 'react';
import type { RowSelection } from '../types';

const defaultRowSelection: RowSelection = {
  type: 'checkbox',
  fixed: true,
};

export function useRowSelection(options: boolean | RowSelection = true) {
  const getRowSelection =
    typeof options === 'boolean' ? defaultRowSelection : { ...defaultRowSelection, ...options };
  useState({
    selectedRowKeys: [],
  });
  return {
    getRowSelection,
  };
}
