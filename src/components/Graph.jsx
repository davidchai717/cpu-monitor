import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import { useStoreContext } from '../store';

const Graph = () => {
  const canvasRef = useRef(null);
  const { state: { loadData } } = useStoreContext();
  let cpuLoadChart;
  useEffect(() => {
    if (cpuLoadChart) {
      // TODO: clean up this piece of code
      const newLabels = loadData.map((load) => load.x);
      cpuLoadChart.data.labels.push(newLabels[newLabels.length - 1]);
      const newData = loadData.map((load) => load.y);
      cpuLoadChart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData[newData.length - 1]);
      });
      cpuLoadChart.update();
    } else {
      cpuLoadChart = new Chart(canvasRef.current, {
        type: 'line',
        data: {
          labels: loadData.map((load) => load.x),
          datasets: [{
            label: 'CPU Load',
            data: loadData.map((load) => load.y),
          }],
        },
      });
    }
  });
  return (
    <div id="chart-container">
      <canvas id="main-chart" ref={canvasRef} length="1600" width="1600" />
    </div>
  );
};

export default Graph;
