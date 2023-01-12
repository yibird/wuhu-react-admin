import React from "react";
import { Breadcrumb as ABreadcrumb } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        General
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Layout
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];

function Breadcrumb() {
  return (
    <ABreadcrumb className="mx-10">
      <ABreadcrumb.Item>Ant Design</ABreadcrumb.Item>
      <ABreadcrumb.Item>
        <a href="">Component</a>
      </ABreadcrumb.Item>
      <ABreadcrumb.Item menu={{ items }}>
        <a href="">General</a>
      </ABreadcrumb.Item>
      <ABreadcrumb.Item>Button</ABreadcrumb.Item>
    </ABreadcrumb>
  );
}

export default Breadcrumb;
