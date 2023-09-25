import React from 'react';
import { Icon } from '@/components';
import { useFullscreen } from 'ahooks';
function FullScreen() {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.documentElement);
  return (
    <li
      onClick={toggleFullscreen}
      className="px-10 hover:bg-[#f6f6f6] cursor-pointer"
      style={{ background: 'var(--header-hover-bg-color)' }}
    >
      <Icon name={isFullscreen ? 'fullscreen-exit-line' : 'fullscreen-line'} size={18} />
    </li>
  );
}

export default FullScreen;
