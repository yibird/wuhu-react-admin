import React from 'react';
import { Divider } from 'antd';
const DetailsRight: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="px-10">
        <div className="text-base text-[rgba(0,0,0,.45)] mb-4">项目数量</div>
        <div className="text-[24px] text-[rgba(0,0,0,.85)]">1000</div>
      </div>
      <Divider type="vertical" style={{ height: '50%' }} />
      <div className="px-10">
        <div className="text-base text-[rgba(0,0,0,.45)] mb-4">团队人数</div>
        <div className="text-[24px] text-[rgba(0,0,0,.85)]">14</div>
      </div>
      <Divider type="vertical" style={{ height: '60%' }} />
      <div className="px-10">
        <div className="text-base text-[rgba(0,0,0,.45)] mb-4">项目访问数</div>
        <div className="text-[24px] text-[rgba(0,0,0,.85)]">2,000</div>
      </div>
    </div>
  );
};

export default DetailsRight;
