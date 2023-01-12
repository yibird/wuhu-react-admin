import React from "react";
import { Space } from "antd";
import Icon from "@/components/Icon";
import TabItem from "./components/TabItem";
import TabRefresh from "./components/TabRefresh";
import TabAction from "./components/TabAction";
import "./index.css";

import { useStore } from "@/store";

function Tabs() {
  return (
    <div className="tabs-theme-default">
      <div className="tabs-control tabs-control-prev">
        <Icon size={20} name="arrow-left-s-line" />
      </div>
      <div className="tabs-control tabs-control-next">
        <Icon size={20} name="arrow-right-s-line" />
      </div>
      <TabRefresh />
      <TabAction />
      <div className="tabs-body">
        <ul className="tabs-body-list">
          <TabItem className="tab-active" />
          <TabItem />
        </ul>
      </div>
    </div>
  );
}

export default Tabs;
