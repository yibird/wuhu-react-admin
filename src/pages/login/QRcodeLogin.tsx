import React from 'react';
import { QRCode } from 'antd';

export default function QRcodeLogin() {
  return (
    <div className="flex-center py-20">
      <QRCode value={'-'} size={240} />
    </div>
  );
}
