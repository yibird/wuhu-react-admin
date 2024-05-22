import React, { useState } from 'react';
import IMFloatButton from './IMFloatButton';
import IMDialog from './IMDialog';
import { useHotkeys } from 'react-hotkeys-hook';
import { KeyboardKeyEnum, KeyboardCodeEnum } from '@/enums';
import type { IMProps } from './types';

export default function IM({ open = false, zIndex = 1000, movable = true, style }: IMProps) {
  const [innerOpen, setInnerOpen] = useState(open);

  const handleOpen = () => {
    setInnerOpen(!innerOpen);
  };
  const handleClose = () => {
    setInnerOpen(false);
  };

  useHotkeys([KeyboardKeyEnum.ESC, KeyboardKeyEnum.CTRL_F], (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.code === KeyboardCodeEnum.CTRL_F) {
      innerOpen ? handleClose() : handleOpen();
      return;
    }
    innerOpen && handleClose();
  });

  return (
    <>
      <IMFloatButton onClick={handleOpen} movable={movable} />
      <IMDialog zIndex={zIndex + 10} open={innerOpen} />
    </>
  );
}
