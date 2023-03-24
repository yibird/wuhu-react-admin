export interface Option {
  offset: "offsetHeight" | "offsetWidth";
  scroll: "scrollTop" | "scrollLeft";
  scrollSize: "scrollHeight" | "scrollWidth";
  size: "width" | "height";
  key: "vertical" | "horizontal";
  axis: "X" | "Y";
  client: "clientX" | "clientY";
  direction: "top" | "left";
}

export const BAR_MAP: { vertical: Option; horizontal: Option } = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top",
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left",
  },
};

let scrollBarWidth: number;
export function scrollbarWidth() {
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  const outer = document.createElement("div");
  outer.className = "scrollbar-wrap";
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";

  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;
  outer.parentNode!.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
}
