import React, { useState, useMemo, useRef } from 'react';
import type { VirtualListProps } from './types';
import { useMount, useUpdateEffect } from 'ahooks';
import { throttle } from 'lodash-es';

interface Position {
  index: number;
  height: number;
  top: number;
  bottom: number;
}

/**
 * 二分查找法,从positions中根据scrollTop获取开始下标
 * @param positions 元素位置信息缓存
 * @param scrollTop 滚动距离
 */
function binarySearch(positions: Position[], scrollTop: number) {
  let start = 0;
  let end = positions.length - 1;
  let tempIndex = -1;
  while (start <= end) {
    const midIndex = parseInt((start + end) / 2 + '');
    const midValue = positions[midIndex].bottom;
    if (midValue === scrollTop) {
      return midIndex + 1;
    } else if (midValue < scrollTop) {
      start = midIndex + 1;
    } else if (midValue > scrollTop) {
      if (tempIndex === -1 || tempIndex > midIndex) {
        tempIndex = midIndex;
      }
      end = end - 1;
    }
  }
  return tempIndex;
}

const VirtualList: React.FC<VirtualListProps> = ({
  data = [],
  size = 500,
  itemSize = 50,
  estimatedItemSize = 50,
  bufferScale = 1,
}) => {
  const listRef = useRef<HTMLDivElement>(null),
    contentRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState({
    // 可视区域高度
    screenHeight: 0,
    // 显示数据的开始索引
    start: 0,
    // 显示数据的结束索引
    end: 0,
  });

  // 用于缓存元素的预估位置,当获取元素真实位置时更新
  const [positions, setPositions] = useState<Position[]>([]);
  const initPositions = () => {
    const positions = data.map((item, index) => {
      return {
        index,
        height: estimatedItemSize,
        top: index * estimatedItemSize,
        bottom: (index + 1) * estimatedItemSize,
      } as Position;
    });
    setPositions(positions);
  };

  // 可视区域显示的元素数量
  const visibleCount = useMemo(() => {
    return Math.ceil(state.screenHeight / estimatedItemSize);
  }, [state, estimatedItemSize]);
  // 上缓冲区数量
  const upperBufferCount = useMemo(() => {
    return Math.min(state.start, bufferScale * visibleCount);
  }, [bufferScale, state]);
  // 下缓冲区数量
  const lowerBuffer = useMemo(() => {
    return Math.min(data.length - state.end, bufferScale * visibleCount);
  }, [bufferScale, state, data]);

  // 可视区域显示的数据
  const visibleData = useMemo(() => {
    const start = state.start - upperBufferCount;
    const end = state.end + lowerBuffer;
    return data.slice(start, end);
  }, [state, data]);

  useMount(() => {
    initPositions();
    setState({
      ...state,
      screenHeight: listRef.current!.clientHeight,
      start: 0,
      end: visibleCount,
    });
  });

  // 根据元素集合获取每一个元素真实高度,并更新元素位置缓存
  const getElementRealHeight = (nodes: NodeListOf<HTMLElement>, positions: Position[]) => {
    nodes.forEach((node, index) => {
      const rect = node.getBoundingClientRect(),
        height = rect.height;
      // 获取预估高度
      const oldHeight = positions[index].height;
      // 获取元素预估高度与元素真实高度的偏差值
      const dValue = oldHeight - height;
      // 如果存在偏差值,则重新计算positions中每项元素的bottom、height、top
      if (dValue) {
        positions[index].bottom = positions[index].bottom - dValue;
        positions[index].height = height;
        for (let k = index + 1; k < positions.length; k++) {
          positions[k].top = positions[k - 1].bottom;
          positions[k].bottom = positions[k].bottom - dValue;
        }
      }
    });
    setPositions(positions);
    return positions;
  };

  // 获取当前的偏移量
  const setStartOffset = (el: HTMLElement, start: number) => {
    function animate() {
      const startOffset = start >= 1 ? positions[start - 1].bottom : 0;
      el.style.transform = `translate3d(0,${startOffset}px,0)`;
    }
    animate();
  };

  useUpdateEffect(() => {
    if (!contentRef.current) return;
    const nodes = contentRef.current.childNodes as NodeListOf<HTMLElement>;
    const newPositions = getElementRealHeight(nodes, positions);
    // 更新列表总高度,撑开滚动条
    const placeholderElement = contentRef.current.previousElementSibling as HTMLElement;
    placeholderElement.style.height = newPositions.at(-1)!.bottom + 'px';
    setStartOffset(contentRef.current, state.start);
  }, [positions]);

  // 处理外部容器滚动事件,使用节流函数优化
  const handleScroll: React.UIEventHandler<HTMLDivElement> = throttle((e) => {
    if (!listRef.current) return;
    // 获取当前滚动位置
    const scrollTop = listRef.current.scrollTop;
    // 根据滚动位置从positions中获取可视区域的开始下标
    const start = binarySearch(positions, scrollTop),
      end = start + visibleCount;
    setState({ ...state, start, end });
    setStartOffset(contentRef.current!, start);
  }, 10);

  return (
    <div
      ref={listRef}
      className="relative overflow-auto"
      style={{ height: size }}
      onScroll={handleScroll}
    >
      {/** 容器内的占位,高度为总列表高度,用于形成滚动条 */}
      <div className="absolute h-full top-0 left-0 right-0 bottom-0 z-[-1]"></div>
      <div ref={contentRef} className="absolute top-0 left-0">
        {visibleData.map((item, index) => {
          return (
            <div
              key={index}
              style={{
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
