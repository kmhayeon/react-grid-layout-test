import React from 'react';
import { Bubble } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BubbleController,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BubbleController,
  Tooltip,
  Legend
);

const bubbleData = {
  datasets: [
    {
      label: 'Bubble Dataset',
      data: [
        { x: 20, y: 30, r: 15 },
        { x: 40, y: 10, r: 10 },
        { x: 30, y: 40, r: 20 },
        { x: 50, y: 20, r: 10 }
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
};

export default function BubbleChart() {
  return <Bubble data={bubbleData} />;
}
