import React from "react";
import Icon from "@/components/Icon";
import TabItem from "./components/TabItem";
import TabRefresh from "./components/TabRefresh";
import TabAction from "./components/TabAction";
import "./index.css";
import { useTab } from "./hooks";

function Tabs() {
  const {
    tabRef,
    tabList,
    current,
    changeTab,
    closeTab,
    rollPageLeft,
    rollPageRight,
  } = useTab<HTMLUListElement>();

  return (
    <div className="tabs tabs-theme-default">
      <div className="tabs-control tabs-control-prev" onClick={rollPageLeft}>
        <Icon size={20} name="arrow-left-s-line" />
      </div>
      <div className="tabs-control tabs-control-next" onClick={rollPageRight}>
        <Icon size={20} name="arrow-right-s-line" />
      </div>
      <TabRefresh />
      <TabAction />
      <div className="tabs-body">
        <ul ref={tabRef} className="tabs-body-list">
          {tabList.map((item, index) => {
            return (
              <TabItem
                onChange={() => changeTab(index)}
                onClose={() => closeTab(index)}
                active={current === index}
                key={item?.id}
                title={item?.title}
                home={item?.home}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Tabs;
