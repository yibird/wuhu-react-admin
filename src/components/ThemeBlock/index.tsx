import React from 'react';
import { type CSSProperties } from 'react';
import { Space } from 'antd';
import { isWhite } from '@/utils/color';
import Icon from '@/components/Icon';

interface ThemeBlockProps {
  themes?: string[];
  defaultTheme?: string;
  onChange?: (theme: string) => void;
}

function ThemeBlock({ themes, defaultTheme, onChange }: ThemeBlockProps) {
  const getStyle = (theme: string) => {
    const styleProps: CSSProperties = {
      backgroundColor: theme,
      color: '#fff',
    };
    if (isWhite(theme)) {
      Object.assign(styleProps, {
        color: '#000',
        border: '1px solid #0b79ee',
      });
    }
    return styleProps;
  };
  return (
    <Space wrap className="flex justify-center">
      {themes?.map((theme) => {
        return (
          <div
            key={theme}
            className="flex-center h-24 w-24 rounded-2 cursor-pointer box-border"
            style={getStyle(theme)}
            onClick={() => onChange && onChange(theme)}
          >
            {theme === defaultTheme && <Icon name="check-fill" size={20} />}
          </div>
        );
      })}
    </Space>
  );
}

export default ThemeBlock;
