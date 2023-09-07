import React from 'react';

interface CollapseContainerProps extends BaseProps {
  // 展开时是否开启loading
  loading?: boolean;
  // 是否允许展开
  canExpan?: boolean;
  /**
   * 扩展和收缩时是否触发window.resize,可以适应表格和表格,当表格收缩时,
   * 表格触发器会调整大小以适应高度
   */
  triggerWindowResize?: boolean;
  // 延迟loading时间
  lazyTime?: number;
}

function CollapseContainer({}: CollapseContainerProps) {
  return <div></div>;
}

export default CollapseContainer;
