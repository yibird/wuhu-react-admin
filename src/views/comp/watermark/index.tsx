import React from 'react';
import Watermark from '@/components/Watermark';

function WatermarkComp() {
  return (
    <div>
      <div
        style={{
          width: 300,
          height: 300,
          position: 'relative',
        }}
      >
        {/* <Watermark image="https://img11.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png" /> */}
        <Watermark content="你是一头猪" fullPage />
      </div>
    </div>
  );
}

export default WatermarkComp;
