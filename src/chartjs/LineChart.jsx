import React from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const lineData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [{
    label: 'Colors',
    data: [12, 19, 3, 5, 2],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)'
    ],
    borderWidth: 1,
    fill: true // 추가: 영역을 채움
  }]
};

export default function LineChart() {
  return <Line data={lineData} />;
}
