import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AgencyAnalytics = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "P1 to P6",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div className="mx-0 text-xl w-full text-gray-900 font-semibold flex flex-col">
      <div className="container bg-slate-100 text-slate-900 rounded-lg">
        <h2 className="font-semibold capitalize mt-5 ml-8">Analytics</h2>
        <div className="flex mt-6 ml-6">
          <DatePicker
            placeholderText="select from month"
            dateFormat="MM/yyyy"
            autoComplete="off"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="px-5 py-4 w-full border border-blue-500 rounded-lg text-sm text-gray-700 font-normal sm:px-8 sm:ml-2"
          />
          <DatePicker
            placeholderText="select to month"
            dateFormat="MM/yyyy"
            autoComplete="off"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="px-5 mx-4 py-4 w-full border border-blue-500 rounded-lg text-sm text-gray-700 font-normal"
          />
          <button
            className="px-4 py-2 ml-8 bg-blue-500 text-white rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="h-[650px] md:w-[700px] px-9 py-8 pt-8 sm:w-[400px] sm:h-[750px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default AgencyAnalytics;
