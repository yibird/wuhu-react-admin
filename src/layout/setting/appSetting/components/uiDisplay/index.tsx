import React from 'react';
import { Space, Divider, Switch } from 'antd';
import { useAppStore, useSelector } from '@/store';

function UIDisplay() {
  const { header, sider, footer, setHeader, setSider, setFooter } = useAppStore(
    useSelector(['header', 'sider', 'footer', 'setHeader', 'setSider', 'setFooter']),
  );

  return (
    <Space size={10} direction="vertical" style={{ width: '100%' }}>
      <Divider>界面显示</Divider>
      <div className="flex-y-center justify-between">
        <span>是否显示头部</span>
        <Switch checked={header.show} onChange={(show) => setHeader({ ...header, show })} />
      </div>
      <div className="flex-y-center justify-between">
        <span>是否显示Logo</span>
        <Switch
          checked={sider.showLogo}
          onChange={(showLogo) => setSider({ ...sider, showLogo })}
        />
      </div>
      {header.show && (
        <div className="flex-y-center justify-between">
          <span>是否显示面包屑</span>
          <Switch
            checked={header.showBreadcrumb}
            onChange={(showBreadcrumb) => setHeader({ ...header, showBreadcrumb })}
          />
        </div>
      )}
      {header.showBreadcrumb && (
        <div className="flex-y-center justify-between">
          <span>是否显示面包屑Icon</span>
          <Switch
            checked={header.showBreadCrumbIcon}
            onChange={(showBreadCrumbIcon) => setHeader({ ...header, showBreadCrumbIcon })}
          />
        </div>
      )}
      <div className="flex-y-center justify-between">
        <span>是否显示底部</span>
        <Switch checked={footer.show} onChange={(show) => setFooter({ ...header, show })} />
      </div>
    </Space>
  );
}

export default UIDisplay;
