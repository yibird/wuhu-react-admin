import React, { useEffect, useMemo } from 'react';
import { Layout } from 'antd';
import { useLocation, useOutlet } from 'react-router-dom';
import { useAppStore, usePermissionStore, useSelector } from '@/store';
import { Loading } from '@/components';
import KeepAlive from 'keepalive-for-react';
import { BaseKeyEnum } from '@/enums';

export default function LayoutContent() {
  const location = useLocation();
  const outlet = useOutlet();
  const { animation } = useAppStore(useSelector(['animation']));
  const { flatMenus } = usePermissionStore(useSelector(['flatMenus']));
  const { enableAnimation, animationName } = animation;

  const active = useMemo(() => {
    return location.pathname + location.search;
  }, [location.pathname, location.search]);

  const currentRoute = useMemo(() => {
    return flatMenus.find((item) => item.path === active);
  }, [flatMenus, active]);

  useEffect(() => {
    const name = enableAnimation ? animationName : '';
    console.log('name', name);
    document.documentElement.style.setProperty(BaseKeyEnum.PAGE_ANIMATION_NAME, name);
  }, [enableAnimation, animationName]);

  return (
    <Layout.Content className="flex-1 relative overflow-hidden">
      <React.Suspense fallback={<Loading loading />}>
        <KeepAlive cache={currentRoute?.keepAlive} activeName={active} max={10} strategy={'LRU'}>
          {outlet}
        </KeepAlive>
      </React.Suspense>
    </Layout.Content>
  );
}
