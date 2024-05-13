import React from 'react';
import { Dock, DockItem } from '@/components';

const items: DockItem[] = [
  {
    id: 1,
    icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg',
    title: 'find',
  },
  {
    id: 2,
    icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg',
    title: 'appStore',
  },
  {
    id: 3,
    icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg',
    title: '照片',
  },
  {
    id: 4,
    icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png',
    title: '垃圾箱',
  },
];

export default function DockComp() {
  return (
    <div className="full relative bg-white">
      <Dock items={items} />
    </div>
  );
}
