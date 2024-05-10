import React, { useEffect, useRef } from 'react';
import { TabPrev, TabNext, TabRefresh, TabAction, TabList } from './components';
import { useRollPage } from './hooks';
import { useAppStore, useSelector } from '@/store';
import { useTabs, useRefresh } from '@/hooks';
import './themes/block.css';
import { Contextmenu, Icon } from '@/components';
import type { ContextMenuType } from '@/components';
import type { MenuProps } from 'antd';

const items: ContextMenuType[] = [
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

function Tabs() {
  const { tabs } = useAppStore(useSelector(['tabs']));
  const tabRef = useRef<HTMLUListElement>(null);
  const {
    tabList,
    current,
    changeTab,
    closeTabByIndex,
    closeCurrentTab,
    closeLeftTab,
    closeRightTab,
    closeOtherTab,
    closeAllTab,
  } = useTabs();
  const { autoRollPage, rollPageLeft, rollPageRight } = useRollPage(tabRef);
  const { refresh } = useRefresh();
  useEffect(() => {
    autoRollPage(current);
  }, [current]);

  if (!tabs.show) return;

  const handleTabAction = (action?: string, params: Record<string, any> = {}) => {
    if (!action) return;
    switch (action) {
      case 'refresh':
        refresh();
        break;
      case 'closeCurrent':
        params.index ? closeTabByIndex(params.index) : closeCurrentTab();
        break;
      case 'closeLeft':
        closeLeftTab();
        break;
      case 'closeRight':
        closeRightTab();
        break;
      case 'closeOther':
        closeOtherTab();
        break;
      case 'closeAll':
        closeAllTab();
        break;
      default:
        break;
    }
  };

  const actionMenuItems = items
    .slice(1)
    .map((item) => ({ ...item, key: item.id, label: item.title })) as MenuProps['items'];

  return (
    <div className="tabs-theme shadow-down-1">
      <TabPrev onClick={rollPageLeft} className={'tab-control tab-control-prev'} />
      <TabNext onClick={rollPageRight} className={'tab-control tab-control-next'} />
      <TabRefresh onClick={refresh} className={'tab-control tab-control-refresh'} />
      <TabAction
        items={actionMenuItems}
        onClick={handleTabAction}
        className="tab-control tab-control-action"
      />
      <TabList
        items={tabList}
        current={current}
        ref={tabRef}
        onChange={changeTab}
        onClose={closeTabByIndex}
        className={'tab-body'}
        wrapperCls={'tab-wrapper'}
        closeCls={'tab-close'}
        homeCls={'tab-home'}
        activeCls={'tab-active'}
      />
      <Contextmenu
        id="tabContextmenu"
        items={items}
        onClick={(item, params) => handleTabAction(item.id, params)}
      />
    </div>
  );
}

export default Tabs;
