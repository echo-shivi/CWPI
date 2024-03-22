import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const BarChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_BASE_URL}dashboard/barchart/details`
            );
            console.log(response.data.barChart); 
            setChartData(response.data.barChart);
        } catch (error) {
            console.error("Error fetching chart data:", error);
        }
    };

    const options = {
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

    return (
        <div>
            <h1></h1>
            <div >
                {chartData && <Bar data={chartData} options={options} />}
            </div>
        </div>
    );
};

export default BarChart;



