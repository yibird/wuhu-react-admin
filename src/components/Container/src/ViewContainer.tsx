import React, { PropsWithChildren } from 'react';

const ViewContainer: React.FC<PropsWithChildren> = ({ children }) => {
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
};

export default ViewContainer;
