import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "../../Atom/SearchBar";
import { Line } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, 
  LinearScale, 
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
  const [startDate, setStartDate] = useState(new Date()); 
  const [endDate, setEndDate] = useState(new Date());
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
    
    console.log("Form submitted");
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h1 className="capitalize">Analytics </h1>
      <div className="flex mt-3">
        <DatePicker
          placeholderText="select from month"
          dateFormat="MM/yyyy"
          id="start-date"
          autoComplete="off"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="px-5 py-4 w-full border border-blue-500 rounded-lg text-sm text-gray-700 font-normal"
        />
         <DatePicker
          placeholderText="select to month"
          dateFormat="MM/yyyy"
          id="start-date"
          autoComplete="off"
          selected={startDate}
          onChange={(date) => setEndDate(date)}
          className="px-5 mx-4 py-4 w-full border border-blue-500 rounded-lg text-sm text-gray-700 font-normal"
        />
         <button
          className="px-4 py-2 ml-8  bg-blue-500 text-white rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
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

