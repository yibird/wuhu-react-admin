import React from 'react';
import { ContextMenuItem } from './types';

export default function Item({ icon, title, suffix }: ContextMenuItem) {
  return (
    <div className="context-menu-item">
      {icon && <div className="context-menu-item_icon">{icon}</div>}
      <div>{title}</div>
      {suffix && <div className="context-menu-item_suffix">{suffix}</div>}
    </div>
  );
}
