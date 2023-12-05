import React from 'react';
import { Switch, Tooltip } from 'antd';
import { useSharedState } from '../../../context';

function Stripe() {
  const [{ action, stripe }, setState] = useSharedState();
  if (Array.isArray(action) && !action.includes('stripe')) return;

  const onChange = (stripe: boolean) => {
    setState((prev) => ({ ...prev, stripe }));
  };
  return (
    <Tooltip title="斑马线">
      <Switch checked={stripe} onChange={onChange} />
    </Tooltip>
  );
}
export default Stripe;
