// import { GiHamburgerMenu } from "react-icons/gi";
// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import DatePicker from "react-datepicker";
// import axios from "axios";

// const Stagewise = () => {
//   const [chartData, setChartData] = useState(null);
//   const [formData, setFormData] = useState({ selectedDate: null });

//   useEffect(() => {
//     fetchData();
//   }, []);

 
//   const fetchData = async () => {
//     try {
//       const res = await axios.get("http://localhost:8001/api/dashboard/stagewisegraph/details");
//       setChartData(res.data); // Fix typo here
//       console.log(chartData); 
//     } catch (error) {
//       console.error('Error fetching chart data:', error);
//     }
//   };


//   const handleDateChange = (date) => {
//     setFormData({ selectedDate: date });
//   };

//   const handleSubmit = () => {
//     // Handle submit logic here
//     console.log("Form submitted");
//   };

//   const options = {
//     plugins: {
//       legend: true,
//     },
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };

//   return (
//     <div className="bg-white p-4 rounded">
//       <h1 className="capitalize mr-4 ">P1 Analytics </h1>
//       <div class="flex flex-row justify-start items-center mt-3">
//         {/* <SearchBar /> */}
//         <DatePicker
//           placeholderText="DD/MM/YYYY"
//           dateFormat="dd/MM/yyyy"
//           id="start-date"
//           autoComplete="off"
//           selected={formData.selectedDate}
//           onChange={handleDateChange}
//           className="p-5 w-full border border-blue-200 text-sm text-gray-700 font-normal rounded"
//         />
//         <button
//           class="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </div>
  
//       <div className="flex flex-row  items-center mt-3 mb-3">
//         <h2 className="text-xl font-bold justify-center mr-3">Statistics by Average</h2>
//         <GiHamburgerMenu />
//       </div>
//       {chartData && (
//         <div
//           style={{
//             width: "600px",
//             height: "300px",
//             padding: "20px",
//           }}
//         >
//           <Line data={chartData} options={options}></Line>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Stagewise;
  
  







import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import SearchBar from "./Atom/SearchBar";
import { Line } from "react-chartjs-2";
import DatePicker from "react-datepicker";


// import DatePicker from "../Atom/DatePIcker";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x-axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const Chart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Departments",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "red",
        pointBorderColor: "red",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const handleSubmit = () => {
    // Handle submit logic here
    console.log("Form submitted");
  };
    const [formData, setFormData] = useState({ selectedDate: null }); // Define formData state
    const handleDateChange = (date) => {
      setFormData({ selectedDate: date }); // Define handleDateChange function
    };

  return (
    <div className="bg-white p-4 rounded">
      <h1 class="capitalize mr-4 ">P1 Analytics </h1>
      <div class="flex flex-row justify-start items-center mt-3">
        {/* <SearchBar /> */}
        <DatePicker
          placeholderText="DD/MM/YYYY"
          dateFormat="dd/MM/yyyy"
          id="start-date"
          autoComplete="off"
          selected={formData.selectedDate}
          onChange={handleDateChange}
          className="p-5 w-full border border-blue-200 text-sm text-gray-700 font-normal rounded"
        />
        <button
          class="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="flex flex-row  items-center mt-3 mb-3">
        <h2 className="text-xl font-bold justify-center mr-3">Statistics by Average</h2>
        <GiHamburgerMenu />
      </div>
      <div
        style={{
          width: "600px",
          height: "300px",
          padding: "20px",
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default Chart;
