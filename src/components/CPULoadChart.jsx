import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import { useStoreContext } from '../store';

let chart;

const CPULoadChart = () => {
  const canvasRef = useRef(null);
  const { state: { loadData, timeStamps } } = useStoreContext();
  useEffect(() => {
    // Destroy the previous iteration of the chart if exists
    // TODO: Decide whether to move the chart into the state
    if (chart) {
      chart.destroy();
    }
    chart = new Chart(canvasRef.current, {
      type: 'line',
      data: {
        labels: timeStamps,
        datasets: [{
          label: 'CPU Load',
          data: loadData,
          fill: false,
          borderColor: 'rgba(0, 0, 0, 0.6)',
        }],
      },
      options: {
        scales: {
          yAxes: [{
            type: 'linear',
            ticks: {
              min: 0,
              suggestedMax: 3,
            },
          }],
        },
        maintainAspectRatio: false,
        animation: false,
      },
    });
  });
  return (
    <div id="chart-container">
      <canvas id="cpu-load-chart" ref={canvasRef} height="900" width="800" />
    </div>
  );
};

export default CPULoadChart;
