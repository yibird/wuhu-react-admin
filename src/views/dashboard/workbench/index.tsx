import React from 'react';
import { Row, Col } from 'antd';
import Details from './details';
import MainContent from './main';
import MinorContent from './minor';
import { ViewContainer } from '@/components';

import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

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

const Workbench: React.FC<{}> = () => {
  return (
    <ViewContainer>
      <Details />
      <Row gutter={10}>
        <MainContent />
        <MinorContent />
      </Row>
    </ViewContainer>
  );
};

export default Workbench;
