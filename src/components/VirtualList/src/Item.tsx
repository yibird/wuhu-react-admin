import type { FC, ReactNode } from 'react';

const Item: FC<{ height: number; child: ReactNode }> = ({ height, child }) => {
  return (
    <div
      style={{
        height,
        display: 'grid',
        placeItems: 'center',
        border: '1px solid red',
        boxSizing: 'border-box',
      }}
    >
      {child}
    </div>
  );
};

export default Item;
