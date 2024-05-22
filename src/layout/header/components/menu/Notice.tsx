import React, { useState } from 'react';
import { Badge } from 'antd';
import { Icon } from '@/components';
import MessageNotice from '@/layout/setting/messageNotice';

export default function Notice({ className }: BaseProps) {
  const [noticeOpen, setNoticeOpen] = useState(false);
  return (
    <>
      <li className={className} onClick={() => setNoticeOpen(true)}>
        <Badge dot className="text-inherit">
          <Icon name="notification-line" size={18} />
        </Badge>
      </li>
      <MessageNotice open={noticeOpen} onClose={() => setNoticeOpen(false)} />
    </>
  );
}
