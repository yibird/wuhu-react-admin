import React, { useMemo, useState } from 'react';
import { Icon } from '@/components';

const defaultActions = [
  {
    icon: <Icon name="apps-fill" size={20} />,
    value: 0,
  },
  {
    icon: <Icon name="star-fill" size={20} />,
    value: 1,
  },
  {
    icon: <Icon name="time-fill" size={20} />,
    value: 2,
  },
];

interface Props {
  collapsed?: boolean;
  onChange?: (value: number) => void;
}

export default function GroupNav({ collapsed, onChange }: Props) {
  const [value, setValue] = useState(0);

  const actions = useMemo(() => {
    return collapsed ? defaultActions.filter((item) => item.value === value) : defaultActions;
  }, [collapsed]);

  const handleClick = (value: number) => {
    setValue(value);
    onChange && onChange(value);
  };

  return (
    <div className="h-50 flex justify-evenly items-center px-20 box-border border-block-1 border-block-solid border-dark">
      {actions.map((item) => {
        return (
          <div
            onClick={() => handleClick(item.value)}
            key={item.value}
            className="text-red text-white transition-all"
            style={{ color: value === item.value ? 'var(--primary-color)' : '' }}
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
}
