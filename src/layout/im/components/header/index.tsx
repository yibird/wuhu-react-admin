import { Icon } from '@/components';
import { Badge } from 'antd';
import React from 'react';
export default function IMSider() {
  return (
    <div className="sticky min-h-56 flex items-center justify-between px-15 b-b-f2">
      <div className="">
        <div className="text-sm">iview银pa群</div>
        <div className="text-xs">
          <Badge color="blue" />
          <span className="ml-5">在线人数:1888</span>
        </div>
      </div>
      <div>
        <Icon name="share-2-line" size={20} className="mr-10" />
        <Icon name="more-line" size={20} />
      </div>
    </div>
  );
}
