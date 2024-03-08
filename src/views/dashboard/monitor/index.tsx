import React from 'react';
import DataOverview from './DataOverview';
import { ViewContainer } from '@/components';

import ServerMonitor from './serverMonitor';
import ClientMonitor from './clinetMonitor';

function Monitor() {
  return (
    <ViewContainer>
      <DataOverview />
      <ServerMonitor />
      <ClientMonitor />
    </ViewContainer>
  );
}

export default Monitor;
