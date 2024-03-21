import React, { useEffect, useRef } from 'react';
import TabPrev from './components/TabPrev';
import TabNext from './components/TabNext';
import TabRefresh from './components/TabRefresh';
import TabAction from './components/TabAction';
import TabList from './components/TabList';
import { useRollPage } from './hooks';
import { useAppStore, useSelector } from '@/store';
import { useTabs } from '@/hooks/store/useTabs';
import { shallow } from 'zustand/shallow';
import { useRefresh } from '@/hooks/web/useRefresh';
import './themes/block.css';

function Tabs() {
  const { tabs } = useAppStore(useSelector(['tabs']), shallow);
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

  return (
    <div className="tabs-theme">
      <TabPrev onClick={rollPageLeft} className={'tab-control tab-control-prev'} />
      <TabNext onClick={rollPageRight} className={'tab-control tab-control-next'} />
      <TabRefresh onClick={refresh} className={'tab-control tab-control-refresh'} />
      <TabAction
        className={'tab-control tab-control-action'}
        closeCurrentTab={closeCurrentTab}
        closeLeftTab={closeLeftTab}
        closeRightTab={closeRightTab}
        closeOtherTab={closeOtherTab}
        closeAllTab={closeAllTab}
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
    </div>
  );
}

export default Tabs;
