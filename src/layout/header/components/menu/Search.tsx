import React, { useState } from 'react';
import { Icon } from '@/components';
import SearchDialog from '@/layout/setting/searchDialog';

export default function Search() {
  const [open, setOpen] = useState(false);
  return (
    <li className="flex-y-center" onClick={() => setOpen(!open)}>
      <Icon name="search-line" size={18} />
      {SearchDialog}
    </li>
  );
}
