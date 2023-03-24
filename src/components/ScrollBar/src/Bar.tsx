import React, {
  CSSProperties,
  MouseEventHandler,
  useMemo,
  useRef,
} from "react";
import type { BarProps } from "./types";
import { useUnmount } from "ahooks";
import { on, off } from "@/utils/dom";

import { BAR_MAP } from "./util";

function Bar({
  vertical,
  size,
  color = "rgba(144, 147, 153, 0.3)",
  width = 6,
  move,
}: BarProps) {
  const barRef = useRef<HTMLDivElement>(null),
    thumbRef = useRef<HTMLDivElement>(null),
    cursorDown = useRef(false),
    axis = useRef(0);

  const opt = useMemo(() => {
    return BAR_MAP[vertical ? "vertical" : "horizontal"];
  }, [vertical]);

  const getTrackStyle = useMemo(() => {
    return vertical ? { width } : { height: width };
  }, [vertical]);

  const style = useMemo(() => {
    const translate = `translate${opt.axis}(${move}%)`;
    const style: CSSProperties = {
      transform: translate,
      msTransform: translate,
      WebkitTransform: translate,
      [opt.size]: size,
      backgroundColor: color,
    };
    return style;
  }, [size, move, opt]);

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
    axis.current = e.currentTarget[offset] - (e[client] - rect[direction]);
  };

  /**
   * 点击滚动条凹槽
   * @param e 事件对象
   * @returns
   */
  const clickTrackHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    const thembEl = thumbRef.current;
    if (!thembEl) return;
    const { direction, client, scroll, scrollSize } = opt;
    // 获取偏移量
    const offset = Math.abs(
      e.currentTarget.getBoundingClientRect()[direction] - e[client]
    );
    // 计算滚动条块的一半
    const thumbHalf = thembEl[opt.offset] / 2;
    // 获取当前组件元素的offset距离
    const currentElOffset = barRef.current![opt.offset];
    // 计算滚动条百分比
    const thumbPositionPercentage =
      ((offset - thumbHalf) * 100) / currentElOffset;
    // 获取可视区域元素并设置滚动条移动距离(即设置scroll)
    const wrapEl = barRef.current?.parentElement;
    if (wrapEl) {
      wrapEl[scroll] = (thumbPositionPercentage * wrapEl[scrollSize]) / 100;
    }
  };

  /**
   * 拖拽滚动条块
   * @param e 事件对象
   */
  const startDrag: MouseEventHandler<HTMLDivElement> = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    cursorDown.current = true;
    // 监听document鼠标移动事件
    on(document, "mousemove", mouseMoveDocumentHandler);
    // 监听document鼠标松开事件
    on(document, "mouseup", mouseUpDocumentHandler);
    document.onselectstart = () => false;
  };

  /**
   * 拖拽滚动条块鼠标移动事件
   * @param e 事件对象
   */
  const mouseMoveDocumentHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cursorDown.current) return;
    const prevPage = axis.current;
    if (!prevPage) return;

    const wrapEl = barRef.current?.parentElement;
    if (!wrapEl) return;
    const { direction, client, scroll, scrollSize } = opt;
    const offset =
      (wrapEl!.getBoundingClientRect()[direction] - e[client]) * -1;
    // 获取滚动块的点击位置
    const thumbClickPosition = thumbRef.current![opt.offset] - prevPage;
    // 获取滚动块位置百分比
    const thumbPositionPercentage =
      ((offset - thumbClickPosition) * 100) / barRef.current![opt.offset];
    // 设置wrap元素的滚动距离
    wrapEl![scroll] = (thumbPositionPercentage * wrapEl![scrollSize]) / 100;
  };

  /**
   * 拖拽滚动条块鼠标松开事件
   * @param e
   */
  const mouseUpDocumentHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    cursorDown.current = false;
    axis.current = 0;
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
      style={getTrackStyle}
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
