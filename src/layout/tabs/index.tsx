import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { TabPrev, TabHome, TabNext, TabRefresh, TabAction, TabList } from './components';
import { useRollPage } from './hooks';
import { useAppStore, useSelector } from '@/store';
import { useMenus, useRefresh } from '@/hooks';
import { Contextmenu, Icon } from '@/components';
import type { ContextMenuType } from '@/components';
import type { MenuProps } from 'antd';
import { loadLinkScript } from '@/utils/dom/loadScript';

const actionItems: ContextMenuType[] = [
  {
    id: 'refresh',
    title: '刷新当前标签页',
    icon: <Icon name="refresh-line" size={20} />,
  },
  {
    id: 'closeCurrent',
    title: '关闭当前标签页',
    icon: <Icon name="close-line" size={20} />,
  },
  {
    id: 'closeLeft',
    title: '关闭左侧标签页',
    icon: <Icon name="skip-back-line" size={20} />,
  },
  {
    id: 'closeRight',
    title: '关闭右侧标签页',
    icon: <Icon name="skip-forward-line" size={20} />,
  },
  {
    id: 'closeOther',
    title: '关闭其他标签页',
    icon: <Icon name="stop-mini-fill" size={20} />,
  },
  {
    id: 'closeAll',
    title: '关闭全部标签页',
    icon: <Icon name="subtract-line" size={20} />,
  },
];

const getActionItems = (items: ContextMenuType[]) => {
  return items
    .slice(1)
    .map((item) => ({ ...item, key: item.id, label: item.title })) as MenuProps['items'];
};

function Tabs() {
  const { tabs } = useAppStore(useSelector(['tabs']));
  const tabRef = useRef<HTMLUListElement>(null);
  const {
    current,
    openMenus,
    openMenu,
    openHomeMenu,
    closeMenuByIndex,
    closeCurrentMenu,
    closeLeftMenus,
    closeRightMenus,
    closeOtherMenus,
    closeAllMenus,
  } = useMenus();
  const { autoRollPage, rollPageLeft, rollPageRight } = useRollPage(tabRef);
  const { refresh } = useRefresh();
  useLayoutEffect(() => {
    if (current === 0) {
      return;
    }
    autoRollPage(current);
  }, [current]);

  useEffect(() => {
    const url = new URL(`./themes/${tabs.theme}.less`, import.meta.url).href;
    loadLinkScript({ url, id: 'tabs_theme' });
  }, [tabs.theme]);

  if (!tabs.show) return;

  const handleTabAction = (action?: string, params: Record<string, any> = {}) => {
    if (!action) return;
    switch (action) {
      case 'refresh':
        refresh();
        break;
      case 'closeCurrent':
        params.index ? closeMenuByIndex(params.index) : closeCurrentMenu();
        break;
      case 'closeLeft':
        closeLeftMenus();
        break;
      case 'closeRight':
        closeRightMenus();
        break;
      case 'closeOther':
        closeOtherMenus();
        break;
      case 'closeAll':
        closeAllMenus();
        break;
      default:
        break;
    }
  };
  return (
    <div className="tabs shadow-down-1">
      <TabPrev onClick={rollPageLeft} />
      <TabHome onClick={openHomeMenu} className={`${current === -1 ? 'tab-item-active' : ''}`} />
      <TabNext onClick={rollPageRight} />
      <TabRefresh onClick={refresh} />
      <TabAction items={getActionItems(actionItems)} onClick={handleTabAction} />
      <TabList
        items={openMenus}
        current={current}
        ref={tabRef}
        onChange={openMenu}
        onClose={closeMenuByIndex}
        closeClass={'tab-close'}
        activeClass={'tab-item-active'}
      />
      <Contextmenu
        id="tabContextmenu"
        items={actionItems}
        onClick={(item, params) => handleTabAction(item.id, params)}
      />
    </div>
  );
}

export default Tabs;
