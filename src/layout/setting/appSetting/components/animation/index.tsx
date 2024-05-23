import React from 'react';
import { Divider, Switch, Space, Select } from 'antd';
import { useAppStore, useSelector } from '@/store';
import ConfigItem from '../ConfigItem';
import { AnimationNameEnum } from '@/enums';

const animationNames = Object.values(AnimationNameEnum).map((v) => ({
  value: v,
  label: v,
}));

function Animation() {
  const { animation, setAnimation } = useAppStore(useSelector(['animation', 'setAnimation']));
  const { topProgressBar, enableAnimation, animationName } = animation;

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
                defaultValue={animationName}
                options={animationNames}
                onChange={(animationName) => setAnimation({ ...animation, animationName })}
              />
            }
          />
        )}
      </Space>
    </div>
  );
}

export default Animation;
