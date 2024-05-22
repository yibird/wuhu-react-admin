import React, { useState } from 'react';
import SearchDialog from '@/layout/setting/searchDialog';
import { Icon } from '@/components';

export default function Search({ className }: BaseProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li className={className} onClick={() => setOpen(true)}>
        <Icon name="search-line" size={18} />
      </li>
      <SearchDialog open={open} onClose={() => setOpen(false)} width="50%" />
    </>
  );
}
