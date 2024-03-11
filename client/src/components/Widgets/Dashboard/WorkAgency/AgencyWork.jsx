import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import axios from 'axios'; 

const AgencyWork = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/api/cwpi/dashboard/workAgencies/details')
      .then((response) => {
        console.log('API response:', response.data);
        setCardsData(response.data.workAgenciesDetails); 
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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cardsData.map((card, index) => (
        <Link
          to={`/scheme-report-details`} 
          key={index}
          className="block max-w-sm p-6 bg-blue-300 text-black border border-gray-200 rounded-lg shadow hover:bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p className="text-sm md:text-base font-medium mb-2 flex justify-between">
            {card.DepartmentName} <BsFillArrowRightCircleFill size={22} color='white'/>
          </p>
          <p className='font-normal text-base'>{card.Project_Count}</p>
        </Link>
      ))}
    </div>
  );
};



export default AgencyWork;




