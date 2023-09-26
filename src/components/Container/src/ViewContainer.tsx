import React, { PropsWithChildren } from 'react';

export function ViewContainer({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        padding: 10,
        overflowY: 'auto',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
}
