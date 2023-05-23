import React from "react";
import { Card, Avatar, Typography } from "antd";
import type { ProjectItem } from "../types";

const projects: ProjectItem[] = [
  {
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
    name: "Alipay",
    describe: "那是一种内在的东西，他们到达不了，也无法触及的",
    master: "zchengfeng",
    createAt: "2020-02-02",
  },
  {
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
    name: "Angular",
    describe: "那是一种内在的东西，他们到达不了，也无法触及的",
    master: "zchengfeng",
    createAt: "2020-02-02",
  },
  {
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",
    name: "Ant Design",
    describe: "那是一种内在的东西，他们到达不了，也无法触及的",
    master: "zchengfeng",
    createAt: "2020-02-02",
  },
  {
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",
    name: "Ant Design Pro",
    describe: "那是一种内在的东西，他们到达不了，也无法触及的",
    master: "zchengfeng",
    createAt: "2020-02-02",
  },
  {
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",
    name: "Bootstrap",
    describe: "那是一种内在的东西，他们到达不了，也无法触及的",
    master: "zchengfeng",
    createAt: "2020-02-02",
  },
  {
    avatar:
      "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",
    name: "React",
    describe: "那是一种内在的东西，他们到达不了，也无法触及的",
    master: "zchengfeng",
    createAt: "2020-02-02",
  },
];

const ProjectItem: React.FC<{ item: ProjectItem }> = ({ item }) => {
  const { avatar, name, describe, master, createAt } = item;
  return (
    <>
      <div>
        <Avatar src={avatar} size={30} />
        <span className="ml-10 font-medium">{name}</span>
      </div>
      <div className="my-10 h-44 leading-22 text-base text-[rgba(0,0,0,.45)]">
        {describe}
      </div>
      <div className="flex-y-center justify-between text-base">
        <Typography.Link>{master}</Typography.Link>
        <span className="ml-5 text-[rgba(0,0,0,.25)]">{createAt}</span>
      </div>
    </>
  );
};

const Project: React.FC<{ data?: ProjectItem[] }> = ({ data = projects }) => {
  return (
    <Card
      title="项目"
      headStyle={{ minHeight: 50 }}
      extra={<Typography.Link>更多</Typography.Link>}
    >
      {data.map((item, index) => {
        return (
          <Card.Grid
            key={index}
            style={{ width: "33.333%", padding: "15px 25px" }}
          >
            <ProjectItem item={item} />
          </Card.Grid>
        );
      })}
    </Card>
  );
};
export default Project;
