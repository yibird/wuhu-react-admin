import React, { useMemo } from "react";
import Icon from "@/components/Icon";
import clsx from "clsx";
export interface TabItemProps extends BaseProps {
  active?: boolean;
  title?: string;
  home?: boolean;
  closeCls?: string;
  onChange?: () => void;
  onClose?: () => void;
}

function TabItem({
  active,
  title,
  home = false,
  closeCls,
  onChange,
  onClose,
  className,
}: TabItemProps) {
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose && onClose();
  };

  // const getCls = useMemo(() => {
  //   return clsx(active && "tab-active", className);
  // }, [active, className]);

  const handleChange = () => {
    onChange && onChange();
  };
  console.log("className:", className);
  return (
    <li className={className} onClick={handleChange}>
      {home ? (
        <Icon name="home-2-line" size={18} color="#999" />
      ) : (
        <div>
          {title && <span>{title}</span>}
          <Icon onClick={handleClose} className={closeCls} name="close-line" />
        </div>
      )}
    </li>
  );
}

export default TabItem;
