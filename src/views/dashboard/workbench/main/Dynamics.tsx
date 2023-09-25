import React, { useState } from "react";
import { Card, Typography } from "antd";

interface Props {
  render: (count: number, increment: () => void) => React.ReactNode;
}

const RenderPropsExample: React.FC<Props> = ({ render }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return <div>{render(count, increment)}</div>;
};

const Parent = () => {
  return (
    <div>
      <RenderPropsExample
        render={(count, increment) => {
          return (
            <div>
              <p>Count: {count}</p>
              <button onClick={increment}>Click Me</button>
            </div>
          );
        }}
      />
    </div>
  );
};

const Dynamics: React.FC = () => {
  return (
    <Card
      title="动态"
      headStyle={{ minHeight: 50 }}
      extra={<Typography.Link>更多</Typography.Link>}
    >
      <Parent />
    </Card>
  );
};

export default Dynamics;
