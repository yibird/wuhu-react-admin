import React from 'react';
import { Icon } from '@/components';
import { Tooltip } from 'antd';
import { useSharedState } from '../../../context';

export default function Fullscreen() {
  const [{ full = false }, setState] = useSharedState();
  const handleClick = () => {
    setState((prev) => ({ ...prev, full: !full }));
  };
  return (
    <Tooltip title={full ? '退出全屏' : '进入全屏'} placement="bottomLeft">
      <div
        onClick={handleClick}
        className="w-32 h-32 flex-center rounded-full border border-solid border-[#ccc]"
      >
        <Icon name={full ? 'fullscreen-exit-line' : 'fullscreen-line'} size={18} />
      </div>
    </Tooltip>
  );
}
