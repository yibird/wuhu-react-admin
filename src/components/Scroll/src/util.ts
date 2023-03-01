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
