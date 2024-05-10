import React, { useImperativeHandle, useRef } from 'react';
import { Avatar } from 'antd';

import type { MessageListRef, MessageListProps, MessageItemProps } from '../types';

function MessageItem({ avatar, name, content, datetime, direction = 'left' }: MessageItemProps) {
  // const getContent = (content: string) => {
  //   const el = document.createElement('div');
  //   el.innerHTML = content;
  //   return el.childNodes.length === 0 ? '' : el.childNodes[0].nodeValue!;
  // };

  return (
    <div className={`flex mt-12 ${direction === 'right' ? 'flex-row-reverse' : ''}`}>
      <Avatar size={40} src={<img src={avatar} />} />
      <div className="mx-8 text-sm">
        <div className={`text-[#666] select-none ${direction === 'right' ? 'text-right' : ''}`}>
          {name}
        </div>
        <div
          className="mt-5 p-10 bg-white rounded-4 max-w-320 break-words"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
}

export default React.forwardRef<MessageListRef, MessageListProps>(({ data = [] }, ref) => {
  const listRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      scrollToBottom() {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
      },
    };
  });

  return (
    <div className="flex-1 p-10 overflow-x-auto" ref={listRef}>
      {data.map((item, i) => {
        return <MessageItem key={i} direction={i % 2 === 0 ? 'left' : 'right'} {...item} />;
      })}
    </div>
  );
});
