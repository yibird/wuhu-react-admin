import React from 'react';

export interface ConfigItemProps {
  title?: string;
  content?: React.ReactNode;
}

function ConfigItem({ title, content }: ConfigItemProps) {
  return (
    <div className="flex-y-center justify-between">
      <span>{title}</span>
      {content}
    </div>
  );
}

export default ConfigItem;
