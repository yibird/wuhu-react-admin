import React, {
  CSSProperties,
  ReactNode,
  createElement,
  useRef,
  useMemo,
  useState,
  useEffect,
} from "react";

import { on, off } from "@/utils/dom";
import Bar from "./Bar";
import "./index.css";

export interface ScrollbarProps {
  // 是否使用原生滚动条
  native?: boolean;
  wrapStyle?: CSSProperties;
  wrapClass?: string;
  viewClass?: string;
  viewStyle?: CSSProperties;
  noresize?: boolean;
  // 渲染元素
  tag?: string;
  children?: ReactNode;
}

function Scrollbar({
  native = false,
  wrapStyle,
  wrapClass,
  viewStyle,
  viewClass,
  noresize = true,
  tag = "div",
  children,
}: ScrollbarProps) {
  const [position, setPosition] = useState({
    sizeWidth: "0",
    sizeHeight: "0",
    moveX: 0,
    moveY: 0,
  });

  const wrapRef = useRef<HTMLDivElement>(null),
    viewRef = useRef<HTMLElement>(null);

  const view = createElement(
    tag,
    {
      class: ["el-scrollbar__view", viewClass],
      style: viewStyle,
      ref: viewRef,
    },
    [children]
  );

  const getWrapClass = useMemo(() => {
    return ["scrollbar-wrap", wrapClass].join(" ");
  }, [wrapClass]);

  const wrapEl = useMemo(() => wrapRef.current!, []);

  const handleScroll = () => {
    if (!wrapRef.current) return;
    const wrapEl = wrapRef.current;
    const moveX = (wrapEl.offsetLeft * 100) / wrapEl.clientWidth,
      moveY = (wrapEl.offsetTop * 100) / wrapEl.clientHeight;
    setPosition({ ...position, moveX, moveY });
  };

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
      <div className="scrollbar">
        <div ref={wrapRef} style={wrapStyle} className={getWrapClass}>
          {view}
        </div>
      </div>
    );
  }

  return (
    <div className="scrollbar">
      <div
        ref={wrapRef}
        style={wrapStyle}
        className={getWrapClass}
        onScroll={handleScroll}
      >
        {view}
        <Bar move={position.moveX} size={position.sizeWidth} />
        <Bar vertical move={position.moveY} size={position.sizeHeight} />
      </div>
    </div>
  );
}

export default Scrollbar;
