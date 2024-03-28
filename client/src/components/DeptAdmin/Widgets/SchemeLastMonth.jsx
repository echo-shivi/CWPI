import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
const SchemeReport = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/api/deptadmin/lastMonthScheme/details')
      .then((response) => {
        console.log('API response:', response.data);
        setCardsData(response.data.lastMonthScheme);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  if (!Array.isArray(cardsData)) {
    console.error('cardsData is not an array:', cardsData);
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 cursor-pointer">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="flex justify-between p-4 lg:p-6 bg-blue-300 text-black border border-gray-200 rounded-lg shadow hover:bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          
          <p className="text-sm md:text-base font-normal mb-2">
            {card.SchemeName} : {card.Project_Count}
          </p>
         
          
          <BsFillArrowRightCircleFill size={22} color="white" />
        </div>
      ))}
    </div>
  );
};

export default SchemeReport;