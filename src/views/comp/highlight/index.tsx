import React from 'react';
import { ViewContainer, Highlight } from '@/components';

function HighlightComp() {
  const content = `我是傻逼 我 我 我`;
  return (
    <ViewContainer>
      <Highlight
        queries={`我`}
        content={content}
        highlightStyle={{
          backgroundColor: 'red',
          fontSize: '20px',
        }}
      />
    </ViewContainer>
  );
}

export default HighlightComp;
