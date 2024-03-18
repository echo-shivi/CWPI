import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "./Atom/SearchBar";
import { Line } from "react-chartjs-2";
import DatePicker from "./Atom/DatePIcker";

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

  return (
    <div>
      <h1 class="capitalize ">P1 Analytics </h1>
      <div class="flex flex-row justify-start items-center mt-3">
        {/* <SearchBar /> */}
        <DatePicker />
        <button
          class="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="flex flex-row items-center ml-16 mt-4 mb-2">
  <h2 className="text-4xl f font-bold mr-3">Statistics by Average</h2>
  <GiHamburgerMenu className=" w-25 h-32 bg-white hover:bg-blue-100 cursor-pointer" />
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
