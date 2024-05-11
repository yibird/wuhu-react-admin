import React, { useEffect, useState } from 'react';
import { View, Loading, LoadingProps, useLoading } from '@/components';
import { Alert, Button } from 'antd';

export default function LoadingComp() {
  const [state, setState] = useState<LoadingProps>({
    loading: true,
    full: false,
    tip: '加载中...',
  });

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => setState({ ...state, loading: false }), 1000);
    }
  }, [state]);

  const [open, close, setTip] = useLoading({
    tip: 'loading...',
  });

  return (
    <View>
      <Loading {...state} />
      <Alert message="组件方式" />
      <div>
        <Button onClick={() => setState({ ...state, loading: true, full: false })}>
          容器Loading
        </Button>
        <Button onClick={() => setState({ ...state, loading: true, full: true })}>
          全屏Loading
        </Button>
      </div>

      <Alert message="Hooks方式" />
      <div>
        <Button
          onClick={() => {
            open();
            setTimeout(close, 1000);
          }}
        >
          容器Loading
        </Button>
        <Button onClick={() => setTip('loading...')}>setTip</Button>
      </div>
    </View>
  );
}
