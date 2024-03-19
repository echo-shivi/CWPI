const StageWiseGraphs = [
    {
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Data 1",
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: "red",
            pointBorderColor: "red",
            backgroundColor: "rgba(75,192,192,0.2)",
            tension: 0.4,
          },
    
        ],
      },
      options: {
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
      },
    },
    {
      title: "Graph 2",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Data 2",
            data: [45, 49, 70, 71, 46, 45, 30],
            borderColor: "blue",
            pointBorderColor: "blue",
            backgroundColor: "rgba(192,75,192,0.2)",
            tension: 0.4,
          },
    
        ],
      },
      options: {
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
      },
    },
    
  ];
  
  module.exports = { StageWiseGraphs };
  