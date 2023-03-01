import React, {
  CSSProperties,
  MouseEventHandler,
  useMemo,
  useRef,
} from "react";
import { useUnmount } from "ahooks";
import { on, off } from "@/utils/dom";

import { BAR_MAP } from "./util";

export interface BarProps {
  // 滚动条是否垂直显示
  vertical?: boolean;
  // 滚动条块的大小
  size?: string;
  // 移动距离
  move?: number;
}

function Bar({ vertical, size, move }: BarProps) {
  const barRef = useRef<HTMLDivElement>(null),
    thumbRef = useRef<HTMLDivElement>(null),
    cursorDown = useRef(false);

  const opt = useMemo(() => {
    return BAR_MAP[vertical ? "vertical" : "horizontal"];
  }, [vertical]);

  // 获取可视区域元素
  const wrapEl = useMemo(() => {
    return barRef.current?.parentElement;
  }, [thumbRef]);

  const style = useMemo(() => {
    const translate = `translate${opt.axis}(${move}%)`;
    console.log("size:", size);
    const style: CSSProperties = {
      transform: translate,
      msTransform: translate,
      WebkitTransform: translate,
      [opt.size]: "44px",
    };
    return style;
  }, [size, move, opt]);

  /**
   * 点击滚动条凹槽
   * @param e 事件对象
   * @returns
   */
  const clickTrackHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!thumbRef.current) return;
    const { direction, client, scroll, scrollSize } = opt;
    const offset = Math.abs(
      e.currentTarget.getBoundingClientRect()[direction] - e[client]
    );
    // 计算滚动条块的一半
    const thumbHalf = thumbRef.current[opt.offset] / 2;
    // 获取当前组件元素的offset距离
    const currentElOffset = barRef.current![opt.offset];
    // 计算滚动条百分比
    const thumbPositionPercentage =
      ((offset - thumbHalf) * 100) / currentElOffset;
    if (wrapEl) {
      // 设置可视区域元素的scroll距离
      wrapEl[scroll] = (thumbPositionPercentage * wrapEl[scrollSize]) / 100;
    }
  };

  /**
   * 点击滚动条块
   * @param e 事件对象
   */
  const clickThumbHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    // 防止右键单击事件
    if (e.button === 2 || e.ctrlKey) return;
    startDrag(e);
    const { offset, client, direction } = opt;
    const rect = e.currentTarget.getBoundingClientRect();
    const axis = e.currentTarget[offset] - (e[client] - rect[direction]);
  };

  /**
   * 拖拽滚动条块
   * @param e 事件对象
   */
  const startDrag: MouseEventHandler<HTMLDivElement> = (e) => {
    (e as unknown as Event).stopImmediatePropagation();
    cursorDown.current = true;
    // 监听document鼠标移动事件
    on(document, "mousemove", mouseMoveDocumentHandler);
    // 监听document鼠标松开事件
    on(document, "mouseup", mouseUpDocumentHandler);
    document.onselectstart = () => false;
  };

  /**
   * 拖拽滚动条块鼠标移动事件
   * @param e
   */
  const mouseMoveDocumentHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cursorDown.current) return;
  };

  /**
   * 拖拽滚动条块鼠标松开事件
   * @param e
   */
  const mouseUpDocumentHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    cursorDown.current = false;
    off(document, "mousemove", mouseMoveDocumentHandler);
    document.onselectstart = null;
  };

  useUnmount(() => {
    off(document, "mouseup", mouseUpDocumentHandler);
  });

  return (
    <div
      className={`scrollbar-bar is-${opt.key}`}
      ref={barRef}
      onMouseDown={clickTrackHandler}
    >
      <div
        ref={thumbRef}
        style={style}
        className="scrollbar-thumb"
        onMouseDown={clickThumbHandler}
      />
    </div>
  );
}

export default Bar;
