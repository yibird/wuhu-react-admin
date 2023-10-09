import React, { useRef } from 'react';
import TabPrev from './components/TabPrev';
import TabNext from './components/TabNext';
import TabRefresh from './components/TabRefresh';
import TabAction from './components/TabAction';
import TabList from './components/TabList';
import clsx from 'clsx';
import { useTab, useDynamicImportCss, useRollPage } from './hooks';

function Tabs() {
  console.log('tabs');
  const tabRef = useRef<HTMLUListElement>(null);
  const styles = useDynamicImportCss(`../themes/default.module.css`);
  const { items, current, changeTab, closeTab } = useTab();
  const { autoRollPage, rollPageLeft, rollPageRight } = useRollPage(tabRef);

  const onChange = (index: number) => {
    changeTab(index);
    autoRollPage(index);
  };

  return (
    <div className={styles.tabsTheme}>
      <TabPrev
        onClick={rollPageLeft}
        className={clsx([styles.tabControl, styles.tabControlPrev])}
      />
      <TabNext
        onClick={rollPageRight}
        className={clsx([styles.tabControl, styles.tabControlNext])}
      />
      <TabRefresh className={clsx([styles.tabControl, styles.tabControlRefresh])} />
      <TabAction className={clsx([styles.tabControl, styles.tabControlAction])} />
      <TabList
        items={items}
        current={current}
        ref={tabRef}
        onChange={onChange}
        onClose={closeTab}
        className={styles.tabBody}
        wrapperCls={styles.tabWrapper}
        closeCls={styles.tabClose}
        homeCls={styles.tabHome}
        activeCls={styles.tabActive}
      />
    </div>
  );
}

export default Tabs;
