import React from 'react';

import { Avatar, Divider } from 'antd';
const items = [
  {
    title: '项目数量',
    value: 1000,
  },
  {
    title: '团队人数',
    value: 14,
  },
  {
    title: '项目访问数',
    value: 2000,
  },
];

function DetailsRight() {
  return (
    <div className="flex items-center">
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="px-10">
              <div className="text-sm text-[rgba(0,0,0,.45)] mb-4">{item.title}</div>
              <div className="text-[24px] text-[rgba(0,0,0,.85)]">{item.value}</div>
            </div>
            {index !== items.length - 1 && <Divider type="vertical" style={{ height: '50%' }} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function Details() {
  return (
    <div className="flex justify-between bg-white px-20 py-20 mb-10">
      {/* left */}
      <div className="flex items-center">
        <Avatar size={60}>Z</Avatar>
        <div className="px-16">
          <div className="text-base leading-28 text-[rgba(0,0,0,.85)] font-medium mb-10">
            早安，吴彦祖，祝你开心每一天!
          </div>
          <div className="text-xs leading-22 text-[rgba(0,0,0,.45)]">
            交互专家 | 蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED
          </div>
        </div>
      </div>
      <DetailsRight />
    </div>
  );
}

export default Details;
