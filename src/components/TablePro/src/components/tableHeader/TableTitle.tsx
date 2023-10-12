import React from 'react';
import { Tooltip } from 'antd';
import { Icon } from '@/components';
import { useSharedState } from '../../context';
import { isBool, isObject } from '@/utils/is';

function TableTitle() {
  const [{ title }] = useSharedState();
  if (isBool(title) && !title) return;
  if (isObject(title) && 'label' in title) {
    const { label, describe } = title;
    return (
      <div className="flex-y-center">
        <span className="text-lg font-semibold">{label}</span>
        {describe && (
          <Tooltip title={describe}>
            <span className="ml-5">
              <Icon name="question-line" size={20} color="#333" />
            </span>
          </Tooltip>
        )}
      </div>
    );
  }
  return React.createElement('div', {}, [title]);
}

export default TableTitle;
