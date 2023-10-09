// import React, { useRef } from 'react';
// import TabPrev from './components/TabPrev';
// import TabNext from './components/TabNext';
// import TabRefresh from './components/TabRefresh';
// import TabAction from './components/TabAction';
// import TabList from './components/TabList';
// import { useTab, useDynamicImportCss } from './hooks';
// import clsx from 'clsx';

// function Tabs() {
//   const tabRef = useRef<HTMLUListElement>(null);
//   const { tabList, current, changeTab, closeTab, rollPageLeft, rollPageRight } = useTab(tabRef);
//   const styles = useDynamicImportCss(`../themes/default.module.css`);
//   return (
//     <div className={`${styles.tabsThemeDefault} tabs-theme-default`}>
//       <TabPrev onClick={rollPageLeft} className={clsx(styles.tabControl, styles.tabControlPrev)} />
//       <TabNext onClick={rollPageRight} className={clsx(styles.tabControl, styles.tabControlNext)} />
//       <TabRefresh className={clsx(styles.tabControl, styles.tabControlRefresh)} />
//       <TabAction className={clsx(styles.tabControl, styles.tabControlDown)} />
//       <TabList
//         ref={tabRef}
//         list={tabList}
//         current={current}
//         wrapperCls={styles.tabBody}
//         className={styles.tabBodyList}
//         activeCls={styles.tabActive}
//         closeCls={styles.tabClose}
//         homeCls={styles.tabHome}
//         onChange={(index) => changeTab(index)}
//         onClose={(index) => closeTab(index)}
//       />
//     </div>
//   );
// }

// export default Tabs;

import React, { useRef } from 'react';
import TabPrev from './components/TabPrev';
import TabNext from './components/TabNext';
import TabRefresh from './components/TabRefresh';
import TabAction from './components/TabAction';
import TabList from './components/TabList';

import { IMenuItem } from '@/common/menus';
import { useTab, useDynamicImportCss } from './hooks';

import clsx from 'clsx';

const items: IMenuItem[] = [
  {
    id: 1,
    title: '1111',
    type: 0,
    home: true,
  },
  {
    id: 2,
    title: '标题',
    type: 0,
  },
  {
    id: 3,
    title: '标题3',
    type: 0,
  },
];

function Tabs() {
  const styles = useDynamicImportCss(`../themes/default.module.css`);

  const { items, current, changeTab, closeTab } = useTab();

  return (
    <div className={styles.tabsTheme}>
      <TabPrev className={clsx([styles.tabControl, styles.tabControlPrev])} />
      <TabNext className={clsx([styles.tabControl, styles.tabControlNext])} />
      <TabRefresh className={clsx([styles.tabControl, styles.tabControlRefresh])} />
      <TabAction className={clsx([styles.tabControl, styles.tabControlAction])} />
      <TabList
        items={items}
        current={current}
        onChange={(index) => changeTab(index)}
        onClose={closeTab}
        className={styles.tabBody}
        closeCls={styles.tabClose}
        homeCls={styles.tabHome}
        activeCls={styles.tabActive}
      />
    </div>
  );
}

export default Tabs;
