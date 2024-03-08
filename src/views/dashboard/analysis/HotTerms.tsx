import React, { useState, useRef, useEffect } from 'react';
import { Col, Card } from 'antd';
import { Chart } from '@antv/g2';

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

export default function HotTerms() {
  const [data, setData] = useState([]);
  const chartRef = useRef<HTMLDivElement | null>(null);

  const getData = () => {
    fetch('https://assets.antv.antgroup.com/g2/philosophy-word.json')
      .then((response) => {
        response.json().then((res) => setData(res.slice(0, 100)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderChart = (el: HTMLElement, data: any[]) => {
    const chart = new Chart({
      container: el,
      autoFit: true,
      width: '100%',
      height: 500,
    });
    chart
      .wordCloud()
      .data(data)
      .layout({
        spiral: 'rectangular',
      })
      .encode('color', 'text');

    chart.render();
  };

  useEffect(() => {
    getData();
    if (!chartRef.current) return;
    renderChart(chartRef.current, data);
  }, []);

  // useEffect(() => {
  //   if (!chartRef.current) return;
  //   renderChart(chartRef.current, data);
  // }, [data]);

  return (
    <Col span={16}>
      <Card title="热门词条">
        <div ref={chartRef}></div>
      </Card>
    </Col>
  );
}
