import React, { useState, useRef } from 'react';
import { Col, Card } from 'antd';
import { Chart } from '@antv/g2';
import { useMount } from 'ahooks';

const initialData = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

// 最近访问
export default function RecentlyVisited() {
  const [data, setData] = useState(() => initialData);
  const chartRef = useRef<HTMLDivElement | null>(null);

  const renderChart = (el?: HTMLDivElement | null, data: any[] = []) => {
    if (!el) return;
    const chart = new Chart({
      container: el,
      autoFit: true,
    });

    chart
      .data(data)
      .encode('x', 'year')
      .encode('y', 'value')
      .scale('x', {
        range: [0, 1],
      })
      .scale('y', {
        domainMin: 0,
        nice: true,
      })
      .axis('x', {
        title: '年份',
        titleSpacing: 30,
        titleFill: '#000',
        titleFontSize: 15,
        titleFontWeight: 'bold',
      })
      .axis('y', {
        title: '访问人数',
        titleSpacing: 30,
        titleFill: '#000',
        titleFontSize: 16,
        titleFontWeight: 'bold',
      });

    chart
      .line()
      .label({
        text: 'value',
        style: {
          dx: -10,
          dy: -12,
        },
      })
      .encode('shape', 'smooth');
    chart
      .area()
      .encode('x', 'year')
      .encode('y', 'value')
      .encode('shape', 'smooth')
      .style('fill', '#1783ff')
      .tooltip(false);
    chart.point().style('fill', 'white').tooltip(false);

    chart.render();
  };

  useMount(() => {
    renderChart(chartRef.current, data);
  });

  return (
    <Col span={16}>
      <Card title="最近访问">
        <div ref={chartRef}></div>
      </Card>
    </Col>
  );
}
