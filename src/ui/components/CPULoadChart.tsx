import React, { useRef, useEffect } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import { useStoreContext } from '../store';

Chart.register(LineController, LineElement, LinearScale, PointElement, CategoryScale);

let chart;

// Helper function to help limit the window to the last 10 minutes
const tenMinLimit = (arr) => {
  if (arr.length > 60) {
    return arr.slice(-60);
  }
  return arr;
};

const CPULoadChart = () => {
  const canvasRef = useRef(null);
  const {
    state: { loadData, timeStamps },
  } = useStoreContext();
  const limitedLoadData = tenMinLimit(loadData);
  const limitedTimeStamps = tenMinLimit(timeStamps);
  useEffect(() => {
    // Destroy the previous iteration of the chart if exists
    if (chart) {
      chart.destroy();
    }
    chart = new Chart(canvasRef.current, {
      type: 'line',
      data: {
        labels: limitedTimeStamps,
        datasets: [
          {
            label: 'CPU Load',
            data: limitedLoadData,
            fill: false,
            borderColor: 'rgba(0, 0, 0, 0.6)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            // y Axis always start at 0, but the end could push past 3 if necessary
            min: 0,
            suggestedMax: 3,
          },
        },
        maintainAspectRatio: false,
        animation: false,
      },
    });
  });
  return (
    <div id="cpu-chart">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CPULoadChart;
