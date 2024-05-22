import React, { useState } from 'react';
import { ViewContainer } from '@/components';
import DataOverview from './DataOverview';
import ServerMonitor from './serverMonitor';
import ClientMonitor from './clinetMonitor';

function Monitor() {
  const [count, setCount] = useState(0);
  return (
    <ViewContainer>
      <div>Hello</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      {/* <DataOverview />
      <ServerMonitor />
      <ClientMonitor /> */}
    </ViewContainer>
  );
}

export default Monitor;
