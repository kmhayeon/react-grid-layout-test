import React from 'react';
import { Scatter } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const scatterData = {
  datasets: [
    {
      label: 'Scatter Dataset',
      data: [
        { x: -10, y: 0 },
        { x: 0, y: 10 },
        { x: 10, y: 5 },
        { x: 0.5, y: 5.5 }
      ],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    }
  ],
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      },
      y: {
        type: 'linear'
      }
    }
  }
};

export default function ScatterChart() {
  return <Scatter data={scatterData} options={scatterData.options} />;
}
