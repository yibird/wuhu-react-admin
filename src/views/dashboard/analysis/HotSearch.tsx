import React, { useRef, useEffect, useState } from 'react';
import { Col, Card } from 'antd';
import { Chart } from '@antv/g2';

interface ChartDataType {
  item: string;
  count: number;
  percent: number;
}
const initialData: ChartDataType[] = [
  { item: '互联网', count: 40, percent: 0.4 },
  { item: '人工智能', count: 21, percent: 0.21 },
  { item: '新能源汽车', count: 17, percent: 0.17 },
  { item: '在线医疗', count: 13, percent: 0.13 },
  { item: '内容平台', count: 9, percent: 0.09 },
];

// 热门搜索
export default function HotSearch() {
  const [data, setData] = useState(() => initialData);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const renderChart = (el: HTMLElement | null, data: any[]) => {
    if (!el) return;
    const chart = new Chart({
      container: el,
      autoFit: true,
    });
    chart.coordinate({ type: 'theta', outerRadius: 0.8 });

    chart
      .interval()
      .attr('padding', 0)
      .attr('margin', 30)
      .data(data)
      .transform({ type: 'stackY' })
      .encode('y', 'percent')
      .encode('color', 'item')
      .legend('color', { position: 'bottom', layout: { justifyContent: 'center' } })
      .label({
        position: 'outside',
        text: (data: ChartDataType) => `${data.item}: ${data.percent * 100}%`,
      })
      .tooltip((data) => ({
        name: data.item,
        value: `${data.percent * 100}%`,
      }));

    chart.render();
  };
  useEffect(() => {
    renderChart(chartRef.current, data);
  }, []);

  return (
    <Col span={8}>
      <Card title="热门搜索">
        <div className="full" ref={chartRef}></div>
      </Card>
    </Col>
  );
}
