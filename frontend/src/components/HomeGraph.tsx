import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  

import { Line  } from 'react-chartjs-2';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },

      },
      y: {
        grid: {
          display: true, // Display horizontal grid lines
        }
        // ,
        //  ticks: {
        //     callback: (value: string, index: number) => ['16 Feb', '17 Feb', '18 Feb', '19 Feb', '20 Feb', '21 Feb', '22 Feb'][index],
        // },
      },
    },
    maintainAspectRatio: false 
  };

const labels = [5.0,6.0,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11];


const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: ['16 Feb','17 Feb','18 Feb','19 Feb','20 Feb','21 Feb','22 Feb'],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(100, 100, 132, 0.5)',
        tension: 0.3 
        }
    ],
  };

const HomeGraph = () => {
   
  return (
    <div className="bg-white w-1/2 border rounded border-white">
        <div className="ml-3 mt-2 mr-3">
            <div className="bg-yellow-50 border  border-yellow-50 rounded-lg pl-2 pt-2 pb-2 ">
                <h5 className=" text-[16px] font-[400]"><span className="text-blue-400 ">Wow!</span> you're about to reach your targeted band</h5>
            </div>
        <div>
        
        <Line options={options} 
        data={data}  
        width={500}
        height={200}/>
        

        </div>
        </div>
        
    </div>
  )
}

export default HomeGraph