import React from 'react';
import { Icon, Trigger } from '@/components';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { composeRef } from '@/utils';
import type { TabListProps } from '../types';

export const TabList = React.forwardRef<HTMLUListElement, TabListProps>(
  function TabList(props, outerRef) {
    const {
      items = [],
      current = 0,
      wrapperStyle,
      style,
      activeClass = '',
      closeClass = '',
      onChange,
      onClose,
    } = props;
    // clsx([itemCls, current - 1 === index && activeCls]);

    const [parent, enableAnimations] = useAutoAnimate<HTMLUListElement>();
    const ref = composeRef(parent, outerRef);
    return (
      <div className="tab-body" style={style}>
        <ul ref={ref} className="tab-body-wrapper" style={wrapperStyle}>
          {items.map((item, index) => {
            return (
              <li
                className={`tab-item ${current === index ? activeClass : ''}`}
                onClick={() => onChange && onChange(item, index)}
                key={item.id}
              >
                <Trigger id="tabContextmenu" params={{ index }}>
                  {item.title && <div>{item.title}</div>}
                  <Icon
                    onClick={() => onClose && onClose(index)}
                    className={closeClass}
                    name="close-line"
                  />
                </Trigger>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
);
