import React, {
  createElement,
  useRef,
  useMemo,
  useState,
  useEffect,
} from "react";
import type { ScrollbarProps } from "./types";
import { on, off } from "@/utils/dom";
import Bar from "./Bar";
import "./index.css";
import { scrollbarWidth } from "./util";

import { debounce } from "lodash-es";

function Scrollbar({
  native = false,
  wrapStyle = {},
  wrapClass = "",
  viewStyle = {},
  viewClass = "",
  noresize = true,
  tag = "div",
  thumbColor,
  thumbWidth,
  children,
  className,
  style,
}: ScrollbarProps) {
  const [position, setPosition] = useState({
    sizeWidth: "0",
    sizeHeight: "0",
    moveX: 0,
    moveY: 0,
  });

  const wrapRef = useRef<HTMLDivElement>(null),
    viewRef = useRef<HTMLElement>(null);

  const getWrapStyle = useMemo(() => {
    // 获取滚动条的宽度
    const gutter = scrollbarWidth();
    if (gutter) {
      return {
        ...wrapStyle,
        marginRight: `-${gutter}px`,
        marginBottom: `-${gutter}px`,
        height: `calc(100% + ${gutter}px )`,
      };
    }
    return wrapStyle;
  }, [wrapStyle]);

  const view = createElement(
    tag,
    {
      className: ["scrollbar-view", viewClass],
      style: viewStyle,
      ref: viewRef,
    },
    [children]
  );

  const getWrapClass = useMemo(() => {
    return ["scrollbar-wrap", wrapClass].join(" ");
  }, [wrapClass]);

  const handleScroll = debounce(() => {
    const wrapEl = wrapRef.current;
    if (!wrapEl) return;
    const moveX = (wrapEl.scrollLeft * 100) / wrapEl.clientWidth,
      moveY = (wrapEl.scrollTop * 100) / wrapEl.clientHeight;
    setPosition({ ...position, moveX, moveY });
  }, 10);

  const update = () => {
    if (!wrapRef.current) return;
    const wrapEl = wrapRef.current;
    const heightPercentage = (wrapEl.clientHeight * 100) / wrapEl.scrollHeight,
      widthPercentage = (wrapEl.clientWidth * 100) / wrapEl.scrollWidth;
    setPosition({
      ...position,
      sizeHeight: `${heightPercentage < 100 ? heightPercentage + "%" : ""}`,
      sizeWidth: `${widthPercentage < 100 ? widthPercentage + "%" : ""}`,
    });
  };

  useEffect(() => {
    if (native || !viewRef.current) return;
    update();
    !noresize && on(viewRef.current, "resize", update);
    return () => {
      if (native || !viewRef.current) return;
      !noresize && off(viewRef.current, "resize", update);
    };
  }, []);

  // 渲染原生滚动条
  if (native) {
    return (
      <div className="scrollbar" style={style}>
        <div ref={wrapRef} style={getWrapStyle} className={getWrapClass}>
          {view}
        </div>
      </div>
    );
  }
  return (
    <div className={`scrollbar ${className}`} style={style}>
      <div
        ref={wrapRef}
        style={getWrapStyle}
        className={getWrapClass}
        onScroll={handleScroll}
      >
        {view}
        <Bar
          color={thumbColor}
          width={thumbWidth}
          move={position.moveX}
          size={position.sizeWidth}
        />
        <Bar
          vertical
          color={thumbColor}
          width={thumbWidth}
          move={position.moveY}
          size={position.sizeHeight}
        />
      </div>
    </div>
  );
}

export default Scrollbar;
