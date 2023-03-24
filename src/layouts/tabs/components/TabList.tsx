import { IMenuItem } from "@/common/menus";
import React, { CSSProperties, forwardRef, useMemo } from "react";
import TabItem from "./TabItem";
import clsx from "clsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { type } from "os";

export interface TabListProps extends BaseProps {
  list?: IMenuItem[];
  current?: number;
  wrapperStyle?: CSSProperties;
  wrapperCls?: string;
  itemCls?: string;
  activeCls?: string;
  closeCls?: string;
  onChange?: (index: number) => void;
  onClose?: (index: number) => void;
}

function fillRef<T>(ref: React.Ref<T>, node: T) {
  if (typeof ref === "function") {
    ref(node);
  } else if (typeof ref === "object" && ref && "current" in ref) {
    (ref as any).current = node;
  }
}

function composeRef<T>(...refs: React.Ref<T>[]): React.Ref<T> {
  const refArr = refs.filter(Boolean);
  if (refs.filter(Boolean).length <= 1) return refArr[0];
  return (node: T) => {
    refs.forEach((ref) => {
      fillRef(ref, node);
    });
  };
}

function useComposeRef<T>(...refs: React.Ref<T>[]): React.Ref<T> {
  return useMemo(() => composeRef(...refs), [refs]);
}

const TabList = forwardRef<HTMLUListElement, TabListProps>(function (
  props,
  outerRef
) {
  const {
    list = [],
    current = 0,
    wrapperStyle,
    wrapperCls,
    className,
    style,
    itemCls,
    activeCls,
    closeCls,
    onChange,
    onClose,
  } = props;
  const [parent, enableAnimations] = useAutoAnimate<HTMLUListElement>();
  const ref = composeRef(parent, outerRef);
  return (
    <div style={wrapperStyle} className={wrapperCls}>
      <ul ref={ref} style={style} className={className}>
        {list.map((item, index) => {
          return (
            <TabItem
              key={item.id}
              className={clsx([itemCls, current === index && activeCls])}
              closeCls={closeCls}
              title={item.title}
              home={item.home}
              onChange={() => onChange && onChange(index)}
              onClose={() => onClose && onClose(index)}
            />
          );
        })}
      </ul>
    </div>
  );
});

export default TabList;
