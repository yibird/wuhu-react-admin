import React from 'react';
import { Divider, Switch, Space, Select } from 'antd';
import { useAppStore } from '@/store';
import ConfigItem from '../ConfigItem';
import { AnimationTypeEnum } from '@/enums';
import { shallow } from 'zustand/shallow';

const animationTypes = Object.values(AnimationTypeEnum).map((v) => ({
  value: v,
  label: v,
}));

function Animation() {
  const { animation, setAnimation } = useAppStore((state) => {
    return {
      animation: state.animation,
      setAnimation: state.setAnimation,
    };
  }, shallow);
  const { topProgressBar, enableAnimation, animationType } = animation;

  return (
    <div className="mb-30">
      <Divider>动画</Divider>
      <Space size={10} direction="vertical" style={{ width: '100%' }}>
        <ConfigItem
          title="顶部进度条"
          content={
            <Switch
              defaultChecked={topProgressBar}
              onChange={(topProgressBar) => setAnimation({ ...animation, topProgressBar })}
            />
          }
        />
        <ConfigItem
          title="切换动画"
          content={
            <Switch
              defaultChecked={enableAnimation}
              onChange={(enableAnimation) => setAnimation({ ...animation, enableAnimation })}
            />
          }
        />
        {enableAnimation && (
          <ConfigItem
            title="页面动画"
            content={
              <Select
                style={{ minWidth: 120 }}
                defaultValue={animationType}
                options={animationTypes}
                onChange={(animationType) => setAnimation({ ...animation, animationType })}
              />
            }
          />
        )}
      </Space>
    </div>
  );
}

export default Animation;
