import React, { useEffect, useState } from 'react';

import MessageList from './messageList';
import MessageTextarea from './textarea';

import type { Message, MessageListRef } from './types';

const defaultMessages: Message[] = [
  {
    avatar: 'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg',
    name: '哈哈哈哈',
    content: '黄河的水很黄',
    datetime: '2020-02-02',
  },
];

export default function IMContent() {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const messageListRef = React.useRef<MessageListRef>(null);

  const handleSaveMessage = (value: string) => {
    setMessages([
      ...messages,
      {
        avatar: 'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg',
        name: '我说的',
        content: value,
        datetime: '2020-02-02',
      },
    ]);
  };

  useEffect(() => {
    messageListRef.current?.scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[#f1f2f3]">
      <MessageList data={messages} ref={messageListRef} />
      <MessageTextarea onEnter={handleSaveMessage} />
    </div>
  );
}
