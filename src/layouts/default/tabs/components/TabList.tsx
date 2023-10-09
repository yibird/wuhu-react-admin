import React, { CSSProperties, forwardRef } from 'react';
import TabItem from './TabItem';
import type { IMenuItem } from '@/common/menus';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { composeRef } from '@/utils';
import clsx from 'clsx';

export interface TabListProps extends BaseProps {
  items?: IMenuItem[];
  current?: number;
  wrapperStyle?: CSSProperties;
  wrapperCls?: string;
  itemCls?: string;
  activeCls?: string;
  closeCls?: string;
  homeCls?: string;
  onChange?: (index: number) => void;
  onClose?: (index: number) => void;
}

const TabList = forwardRef<HTMLUListElement, TabListProps>(function TabList(props, outerRef) {
  const {
    items = [],
    current = 0,
    wrapperStyle,
    wrapperCls,
    className,
    style,
    itemCls,
    activeCls,
    closeCls,
    homeCls,
    onChange,
    onClose,
  } = props;
  const [parent, enableAnimations] = useAutoAnimate<HTMLUListElement>();
  const ref = composeRef(parent, outerRef);
  return (
    <div className={className} style={style}>
      <ul ref={ref} className={wrapperCls} style={wrapperStyle}>
        {items.map((item, index) => {
          return (
            <TabItem
              key={`${item.id}-${index}`}
              className={clsx([itemCls, item.home && homeCls, current === index && activeCls])}
              closeCls={closeCls}
              title={item.title}
              home={item.home}
              onChange={() => onChange && onChange(index)}
              onClose={() => onClose && onClose(index)}
            />
          );
        })}
      </ul>
    </div>
  );
});

export default TabList;
