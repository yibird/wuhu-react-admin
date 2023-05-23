import React from "react";
import { Avatar } from "antd";

const DetailsLeft: React.FC = () => {
  return (
    <div className="flex items-center">
      <Avatar size={60}>Z</Avatar>
      <div className="px-16">
        <div className="text-xl leading-28 text-[rgba(0,0,0,.85)] font-medium mb-10">
          早安，吴彦祖，祝你开心每一天!
        </div>
        <div className="text-base leading-22 text-[rgba(0,0,0,.45)]">
          交互专家 | 蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED
        </div>
      </div>
    </div>
  );
};

export default DetailsLeft;
