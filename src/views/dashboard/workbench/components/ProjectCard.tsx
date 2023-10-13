import { Avatar, Typography, Card } from 'antd';
import type { Project } from '../types';

function ProjectItem({ item }: { item: Project }) {
  const { avatar, name, describe, master, createAt } = item;
  return (
    <>
      <div>
        <Avatar src={avatar} size={30} />
        <span className="ml-10 font-medium">{name}</span>
      </div>
      <div className="my-10 h-44 leading-22 text-xs text-[rgba(0,0,0,.45)]">{describe}</div>
      <div className="flex-y-center justify-between text-base">
        <Typography.Link>{master}</Typography.Link>
        <span className="ml-5 text-xs text-[rgba(0,0,0,.25)]">{createAt}</span>
      </div>
    </>
  );
}

function ProjectCard({ data = [] }: { data?: Project[] }) {
  return (
    <Card
      title="项目"
      headStyle={{ minHeight: 50 }}
      extra={<Typography.Link>更多</Typography.Link>}
    >
      {data.map((item, index) => {
        return (
          <Card.Grid key={index!} style={{ width: '33.333%', padding: '15px 25px' }}>
            <ProjectItem item={item} />
          </Card.Grid>
        );
      })}
    </Card>
  );
}

export default ProjectCard;
