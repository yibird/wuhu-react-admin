import React, { useState } from 'react';
import { Badge } from 'antd';
import { Icon } from '@/components';
import MessageNotice from '@/layout/setting/messageNotice';

export default function Notice() {
  const [noticeOpen, setNoticeOpen] = useState(false);
  return (
    <>
      <li
        className="flex-y-center px-10 hover:bg-[#f6f6f6] cursor-pointer"
        onClick={() => setNoticeOpen(true)}
      >
        <Badge dot className="text-inherit">
          <Icon name="notification-line" size={18} />
        </Badge>
      </li>
      <MessageNotice open={noticeOpen} onClose={() => setNoticeOpen(false)} />
    </>
  );
}
