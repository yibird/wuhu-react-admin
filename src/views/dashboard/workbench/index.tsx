import React from 'react';
import { Row, Col, Space } from 'antd';
import { ViewContainer } from '@/components';
import {
  Details,
  ProjectCard,
  DynamicCard,
  QuickActionCard,
  TeamCard,
  DataAnalysisCard,
} from './components';
import { data } from './data';

// import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

// const queryClient = new QueryClient();

// function Workbench() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Example />
//     </QueryClientProvider>
//   );
// }

// function Example() {
//   const { isLoading, error, data, isFetching } = useQuery({
//     queryKey: ["repoData"],
//     queryFn: () =>
//       axios
//         .get("https://api.github.com/repos/tannerlinsley/react-query")
//         .then((res) => res.data),
//   });
//   if (isLoading) {
//     return <div>loading...</div>;
//   }
//   if (error) {
//     return <div>error</div>;
//   }

//   return <div>{data.name}</div>;
// }

function Workbench() {
  return (
    <ViewContainer gutter={5}>
      <Details />
      <Row gutter={10}>
        <Col span={16}>
          <Space direction="vertical" size={10} style={{ width: '100%' }}>
            <ProjectCard data={data.projects} />
            <DynamicCard />
          </Space>
        </Col>
        <Col span={8}>
          <Space direction="vertical" size={10} style={{ width: '100%' }}>
            <QuickActionCard data={data.quickActions} />
            <TeamCard data={data.teams} />
            <DataAnalysisCard />
          </Space>
        </Col>
      </Row>
    </ViewContainer>
  );
}

export default Workbench;
