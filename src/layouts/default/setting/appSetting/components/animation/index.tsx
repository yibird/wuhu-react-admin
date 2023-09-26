import React from 'react';
import { Divider, Switch, Space, Select } from 'antd';
import { useAppStore } from '@/store';
import { animations } from '@/common/animation';

const animationTypes = animations.map((v) => ({
  value: v,
  label: v,
}));

function Animation() {
  const {animation,setAnimation} = useAppStore();
  const { topProgressBar, enableAnimation, animationType } = animation;

  return (
    <div className="mb-30">
      <Divider>动画</Divider>
      <Space size={10} direction="vertical" style={{ width: '100%' }}>
        <div className="flex-y-center justify-between">
          <span>顶部进度条</span>
          <Switch
            defaultChecked={topProgressBar}
            onChange={(topProgressBar) => setAnimation({ ...animation, topProgressBar })}
          />
        </div>
        <div className="flex-y-center justify-between">
          <span>切换动画</span>
          <Switch
            defaultChecked={enableAnimation}
            onChange={(enableAnimation) => setAnimation({ ...animation, enableAnimation })}
          />
        </div>
        <div className="flex-y-center justify-between">
          <span>动画类型</span>
          <Select
            style={{ minWidth: 120 }}
            defaultValue={animationType}
            options={animationTypes}
            onChange={(animationType) => setAnimation({ ...animation, animationType })}
          />
        </div>
      </Space>
    </div>
  );
}

export default Animation;
