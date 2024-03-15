import React from 'react';
import { Tooltip } from 'antd';
import { Icon } from '@/components';
import { useFullscreen } from 'ahooks';

export default function FullScreen() {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.documentElement);
  return (
    <Tooltip title={isFullscreen ? '退出全屏' : '进入全屏'} placement="bottom">
      <li
        onClick={toggleFullscreen}
        className="flex-y-center px-10 hover:bg-[#f6f6f6] cursor-pointer"
        // style={{ background: 'var(--header-hover-bg-color)' }}
      >
        <Icon name={isFullscreen ? 'fullscreen-exit-line' : 'fullscreen-line'} size={18} />
      </li>
    </Tooltip>
  );
}
