import React, { useEffect, useRef } from 'react';
import TabPrev from './components/TabPrev';
import TabNext from './components/TabNext';
import TabRefresh from './components/TabRefresh';
import TabAction from './components/TabAction';
import TabList from './components/TabList';
import { useTab, useRollPage } from './hooks';
import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';

function Tabs() {
  const { show, theme } = useAppStore((state) => state.tabs, shallow);
  if (!show) return;
  const tabRef = useRef<HTMLUListElement>(null);
  const { items, current, changeTab, closeTab } = useTab();
  const { autoRollPage, rollPageLeft, rollPageRight } = useRollPage(tabRef);

  useEffect(() => {
    import(`./themes/${theme}.css?inline`);
  }, [theme]);

  const onChange = (index: number) => {
    changeTab(index);
    autoRollPage(index);
  };

  return (
    <div className="tabs-theme">
      <TabPrev onClick={rollPageLeft} className={'tab-control tab-control-prev'} />
      <TabNext onClick={rollPageRight} className={'tab-control tab-control-next'} />
      <TabRefresh className={'tab-control tab-control-refresh'} />
      <TabAction className={'tab-control tab-control-action'} />
      <TabList
        items={items}
        current={current}
        ref={tabRef}
        onChange={onChange}
        onClose={closeTab}
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
