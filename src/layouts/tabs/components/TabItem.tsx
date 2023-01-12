import React from "react";
import Icon from "@/components/Icon";

export interface TabItemProps extends BaseProps {
  onChange?: () => void;
  onClose?: () => void;
}

function TabItem({ className, onChange, onClose }: TabItemProps) {
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose && onClose();
  };

  return (
    <li className={className} onClick={() => onChange && onChange()}>
      <span>哈哈哈</span>
      <Icon onClick={handleClose} className="tab-close" name="close-line" />
    </li>
  );
}

export default TabItem;
