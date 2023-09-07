import React, { useContext } from 'react';
import { Tooltip } from 'antd';
import { isBool, isObject } from '@/utils/is';
import { TableContext } from '../../context';
import Icon from '@/components/Icon';

function TableTitle() {
  const { state } = useContext(TableContext);
  const { title } = state;
  if (isBool(title) && !title) return null;
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
