import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import DeptAdminSidebar from "../Common/DeptAdminSidebar";
import Navbar from "../../Common/Navbar";
const AgencyAnalytics = () => {
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

  return (
    <section className="flex bg-blue-100">
      <DeptAdminSidebar />
      <div className="mx-0 text-xl w-full text-gray-900 font-semibold flex flex-col">
        <Navbar />
        <div className=" p-10">
          <h2>Analytics</h2>
          <div className="h-[650px] w-full pt-8">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyAnalytics;
