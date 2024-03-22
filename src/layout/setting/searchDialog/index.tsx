import React, { useDeferredValue, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import DialogHeader from './DialogHeader';
import DialogList from './DialogList';
import DialogFooter from './DialogFooter';
import { useHotkeys } from 'react-hotkeys-hook';
import type { SearchDialogProps, DialogHeaderRef } from './types';

function Dialog({
  open,
  width = 600,
  bodyHeight = 500,
  footer,
  footerStyle,
  clearOnClose = true,
  onClose,
  onChange,
  onClear,
}: SearchDialogProps) {
  const [innerOpen, setInnerOpen] = useState(open),
    [value, setValue] = useState(''),
    deferredValue = useDeferredValue(value);

  const wrapRef = useRef<HTMLDivElement | null>(null),
    contentRef = useRef<HTMLDivElement | null>(null),
    headerRef = useRef<DialogHeaderRef>(null);

  const handleOpen = () => {
    if (!innerOpen) return;
    setInnerOpen(true);
    headerRef.current?.focus();
  };
  const handleClose = () => {
    if (!innerOpen) return;
    setInnerOpen(false);
    onClose && onClose();
    if (clearOnClose && headerRef.current) {
      headerRef.current.setValue('');
    }
  };

  useHotkeys(['ctrl+k', 'esc'], (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.code === 'KeyK') {
      innerOpen && handleClose();
      setInnerOpen(!innerOpen);
      return;
    }
    innerOpen && handleClose();
  });

  useEffect(() => {
    setInnerOpen(open);
  }, [open]);

  useEffect(() => {
    handleOpen();
  }, [innerOpen]);

  const handleWrapClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!wrapRef.current || !contentRef.current) return;
    const target = e.nativeEvent.target! as Element;
    if (!(contentRef.current as Element).contains(target)) {
      handleClose();
    }
  };

  const handleChange = (value: string) => {
    setValue(value);
    onChange && onChange(value);
  };

  const handleClear = () => {
    setValue('');
    onClear && onClear();
  };

  return (
    <div
      style={{ display: innerOpen ? 'flex' : 'none' }}
      className="full fixed justify-center items-center inset-0 overflow-hidden z-100 bg-black/50 backdrop-opacity-10"
      ref={wrapRef}
      onClick={handleWrapClick}
    >
      <div
        className="bg-white rounded-10 overflow-hidden shadow-2xl"
        style={{ width }}
        ref={contentRef}
      >
        <DialogHeader
          ref={headerRef}
          onClose={handleClose}
          onChange={handleChange}
          onClear={handleClear}
        />
        <div
          className="min-h-500 px-8 pt-10 box-border border-block-1 border-block-solid border-[#e2e2e2]"
          style={{ height: bodyHeight, minHeight: bodyHeight }}
        >
          <DialogList value={deferredValue} />
        </div>
        <DialogFooter footer={footer} footerStyle={footerStyle} />
      </div>
    </div>
  );
}
export default function SearchDialog(props: SearchDialogProps) {
  return createPortal(<Dialog {...props} />, document.body);
}
