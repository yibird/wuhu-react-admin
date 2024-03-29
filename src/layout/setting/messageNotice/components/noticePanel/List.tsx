import React from 'react';
import type { ListPops } from './types';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Empty } from 'antd';
import Item from './Item';

function MessageList({ list = [], onDel }: ListPops) {
  const [parent, enableAnimations] = useAutoAnimate<HTMLUListElement>();
  if (list.length === 0) return <Empty imageStyle={{ marginTop: 30 }} />;
  return (
    <ul ref={parent}>
      {list.map((item, index) => {
        return (
          <Item
            item={item}
            key={index}
            index={index}
            isLast={list.length - 1 === index}
            onDel={onDel}
          />
        );
      })}
    </ul>
  );
}
export default MessageList;
