// import React, { useRef } from "react";
// // import annotationPlugin from "chartjs-plugin-annotation";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//   );


// const AgePyramidChart = ({ data }) => {
//     const agePyramidchartRef = useRef(null);
//     const {male, female} = data;

//     const dataset = {
//         labels: ["10-19", "20-29", "30-39", "40-49", "50-59", "60-"].reverse(),
//         datasets: [
//             {
//                 label: "남성",
//                 stack: "Stack 0",
//                 backgroundColor: theme.colors.chart0C,
//                 hoverBackgroundColor: theme.colors.chart0C,
//                 data: [4, 10, 16, 20, 22, 12].reverse().map((k) => -k),
//                 borderRadius: 6,
//                 barThickness: 12,
//             },
//             {
//                 label: "여성",
//                 stack: "Stack 0",
//                 backgroundColor: theme.colors.chart67,
//                 hoverBackgroundColor: theme.colors.chart67,
//                 data: [5, 12, 18, 24, 20, 15].reverse(),
//                 borderRadius: 6,
//                 barThickness: 12,
//             },
//         ],
//     };

//     const options = { 
//         responsive: true,
//         maintainAspectRatio: true,
//         aspectRatio: 1.7,
//         animation: {
//             duration: 0,
//         },
//         layout: {
//             // padding: 20,
//         },
//         indexAxis: 'y',
//         plugins: {
//             legend: {
//                 display: true,
//                 position: "bottom",
//                 align: "start",
//                 onClick: () => {},
//                 labels: {
//                     usePointStyle: true,
//                     boxWidth: 6, //point 크기 작게 지정
//                     padding: 20,
//                     font: {
//                         size: 12,
//                     },
//                 },
//             },
//         },

//         scales: {
//             xAxes: {
//                 suggestedMin: 0,
//                 suggestedMax: 30,
//                 ticks: {
//                     autoSkip: true,
//                     maxRotation: 0,
//                     minRotation: 0,
//                     labelOffset: 0,
//                     padding: 0,
//                     font: {
//                         size: 12,
//                     },
//                     callback: function (k) {
//                         return k < 0 ? `${-k}%` : `${k}%`;
//                     },
//                 },
//                 grid: {
//                     display: false, //뒷배경 라인 없애기
//                 },
//             },
//             x: {
//                 display: false, //하단 라인을 없애기
//                 ticks: {
//                 display: false, //새로운tick을 만들었으니 기존의 tick을 제거
//                 },
//             },
//             y: {
//                 ticks: {
//                     font: {
//                         size: 12,
//                     },
//                     beginAtZero: true,
//                 },
//                 grid: {
//                     display: false, //뒷배경 라인 없애기
//                 },
//                 position: "left",
//             },
//         },

//     }

//     return (
//         <Container>
//         <Bar
//             options={options}
//             data={dataset}
//             ref={agePyramidchartRef}
//             data-testid={"chart-age-pyramid"}
//         />
//         </Container>
//     );
// }

// export default AgePyramidChart;


import React from 'react';
import { Bar } from 'react-chartjs-2';

const Pyramid = ({ data }) => {
  const { male, female } = data;


  const chartData = {
    labels: ['10-19', '20-29', '30-39', '40-49', '50-59', '60-'],
    datasets: [
      {
        male: [5, 12, 18, 24, 20, 15],
        label: '남성',
        stack: 'Stack 0',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        data: male.map(value => -value), // 남성 데이터는 음수로
      },
      {
        male: [5, 12, 18, 24, 20, 15],
        label: '여성',
        stack: 'Stack 0',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        data: female,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default Pyramid;
