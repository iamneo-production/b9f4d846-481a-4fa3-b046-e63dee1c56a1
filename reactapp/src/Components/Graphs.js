import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LinearScale, PointElement, LineElement } from 'chart.js';

const LineGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext('2d');

    Chart.register(LineController, LinearScale, PointElement, LineElement);

    new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Sales',
            data: [50, 60, 70, 80, 75, 90],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineGraph;
