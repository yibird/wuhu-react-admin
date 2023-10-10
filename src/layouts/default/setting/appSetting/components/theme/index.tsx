import React from 'react';
import { Divider, Switch } from 'antd';
import { Icon } from '@/components';
import './index.css';

function Light() {
  return <Icon name="sun-line" size={20} color="#fff" />;
}
function Dark() {
  return <Icon name="moon-line" size={20} color="#fff" />;
}

function Theme() {
  return (
    <div>
      <Divider>主题</Divider>
      <div className="text-center">
        <Switch className="switch" checkedChildren={<Light />} unCheckedChildren={<Dark />} />
      </div>
    </div>
  );
}

export default Theme;
