import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import "./PieChart.css";


ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
  labels: ['여성', '남성'],
  datasets: [
    {
      label: '# of Votes',
      data: [35,65],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
}

function LineChartPie() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 200); // 예제: 스크롤 위치가 200 이상이면 isVisible을 true로 설정
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    
    {isVisible? <Pie data={ data} options={options}/> : "" }
   
    </>
  )

  
}

export default LineChartPie

