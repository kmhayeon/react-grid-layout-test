import React from 'react';
import { Pie } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  ArcElement,
  PieController,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  PieController,
  Tooltip,
  Legend
);

const pieData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)'
      ],
      hoverBackgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)'
      ]
    }
  ]
};

export default function PieChart() {
  return <Pie data={pieData} />;
}
