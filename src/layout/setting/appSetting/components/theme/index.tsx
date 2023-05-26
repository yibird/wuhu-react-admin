import React from "react";
import { Divider, Switch } from "antd";
import Icon from "@/components/Icon";
import "./index.css";

function Theme() {
  return (
    <div>
      <Divider>主题</Divider>
      <div className="text-center">
        <Switch
          className="switch"
          checkedChildren={<Icon name="sun-line" size={20} color="#fff" />}
          unCheckedChildren={<Icon name="moon-line" size={20} color="#fff" />}
        />
      </div>
    </div>
  );
}

export default Theme;
