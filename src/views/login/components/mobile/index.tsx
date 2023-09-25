import React, { useMemo, useRef, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useUnmount } from 'ahooks';
import { Icon } from '@/components';

const initialCountDown = 60;

function MobileNumberLogin() {
  const [countDown, setCountDown] = useState(initialCountDown),
    countDownRef = useRef(initialCountDown),
    timerRef = useRef<NodeJS.Timer | null>(null),
    disabled = useMemo(() => countDown !== initialCountDown, [countDown]);

  const clearTimer = () => {
    setCountDown((countDownRef.current = initialCountDown));
    timerRef.current && clearInterval(timerRef.current);
  };

  const getCaptcha = () => {
    timerRef.current = setInterval(() => {
      if (countDownRef.current === 0) {
        clearTimer();
        return;
      }
      setCountDown((countDownRef.current -= 1));
    }, 1000);
  };

  useUnmount(() => {
    clearTimer();
  });

  return (
    <Form className="mt-15">
      <Form.Item>
        <Input
          size="large"
          placeholder="请输入手机号"
          prefix={<Icon name="smartphone-line" size={20} />}
        />
      </Form.Item>
      <Form.Item>
        <div className="flex justify-between">
          <Input
            maxLength={4}
            size="large"
            placeholder="请输入验证码"
            prefix={<Icon name="shield-keyhole-line" size={20} />}
          />
          <Button className="ml-20 h-48" disabled={disabled} onClick={getCaptcha} size="large">
            {disabled ? `${countDown}秒后重新获取` : '获取验证码'}
          </Button>
        </div>
      </Form.Item>
      <Form.Item>
        <Button type="primary" size="large" block>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

export default MobileNumberLogin;
