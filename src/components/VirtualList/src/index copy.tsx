import React, { useState, useMemo, useEffect, useRef } from 'react';
import type { VirtualListProps } from './types';

const VirtualList: React.FC<VirtualListProps> = ({ data = [], size = 500, itemSize = 50 }) => {
  const [position, setPosition] = useState({
    // 可视区域的高度
    screenHeight: 0,
    // 偏移量
    offset: 0,
    // 起始索引
    start: 0,
    // 结束索引
    end: 0,
  });

  // 定义ref,用于引用外部容器
  const containerRef = useRef<HTMLDivElement>(null);

  // 计算列表总长度(纵向获取高度,横向获取宽度)
  const listHeight = useMemo(() => data.length * itemSize, [data, itemSize]);
  // 计算显示区域的列表项数量
  const visibleCount = useMemo(() => {
    return Math.ceil(position.screenHeight / itemSize);
  }, [position.screenHeight, itemSize]);
  // 获取真实显示列表数据,从渲染数据中截取start到end的之间的元素,这部分元素是可见的
  const visibleData = useMemo(() => {
    const { start, end } = position;
    return data.slice(start, Math.min(end || visibleCount, data.length));
  }, [data, position]);
  // 获取偏移量设置style
  const getTransform = useMemo(() => {
    return `translate3d(0,${position.offset}px,0)`;
  }, [position]);

  useEffect(() => {
    // 获取外部容器的clientHeight
    const screenHeight = containerRef.current?.clientHeight!;
    setPosition({ ...position, screenHeight, start: 0, end: visibleCount });
  }, []);

  // 处理外部容器滚动事件,可以使用节流函数优化
  const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    // 获取当前滚动的距离
    let scrollTop = containerRef.current?.scrollTop!;
    // 计算可视区域的开始索引和结束索引
    const start = Math.floor(scrollTop / itemSize),
      end = start + visibleCount;
    // 计算偏移量
    const offset = scrollTop - (scrollTop % itemSize);
    console.log(scrollTop, scrollTop % itemSize);
    setPosition({ ...position, start, end, offset });
  };

  return (
    /** 外部容器 */
    <div
      ref={containerRef}
      style={{ height: size, position: 'relative', overflow: 'auto' }}
      onScroll={handleScroll}
    >
      {/** 容器内的占位,高度为总列表高度,用于形成滚动条 */}
      <div
        style={{
          height: listHeight,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      ></div>
      {/** list列表 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          transform: getTransform,
        }}
      >
        {visibleData.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                height: itemSize,
                display: 'grid',
                placeItems: 'center',
                border: '1px solid red',
                boxSizing: 'border-box',
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualList;
