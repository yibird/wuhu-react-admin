import React from 'react';
import { ViewContainer, Highlight } from '@/components';

function HighlightComp() {
  const content = '我是傻逼 我 我 我';
  const queries = '我';
  return (
    <Highlight
      queries={queries}
      content={content}
      highlightStyle={{
        backgroundColor: 'red',
        fontSize: '20px',
      }}
    />
  );
}

export default HighlightComp;
