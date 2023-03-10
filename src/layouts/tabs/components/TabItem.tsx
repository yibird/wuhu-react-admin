import React, { useMemo } from "react";
import Icon from "@/components/Icon";
import clsx from "clsx";
export interface TabItemProps extends BaseProps {
  active?: boolean;
  title?: string;
  home?: boolean;
  onChange?: () => void;
  onClose?: () => void;
}

function TabItem({
  active,
  title,
  home = false,
  onChange,
  onClose,
  className,
}: TabItemProps) {
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose && onClose();
  };

  const getCls = useMemo(() => {
    return clsx(active && "tab-active", className);
  }, [active, className]);

  const handleChange = () => {
    onChange && onChange();
  };

  return (
    <li className={getCls} onClick={handleChange}>
      {home ? (
        <Icon name="home-2-line" size={18} color="#999" />
      ) : (
        <div>
          {title && <span>{title}</span>}
          <Icon onClick={handleClose} className="tab-close" name="close-line" />
        </div>
      )}
    </li>
  );
}

export default TabItem;
