import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Card = ({ heading, link }) => {
  return (

    <Link
      to={link}
      className="flex justify-between p-4 lg:p-6 bg-blue-300 text-black border border-gray-200 rounded-lg shadow hover:bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      <p className="text-sm md:text-base font-normal mb-2">
        {heading}
      </p>
      <BsFillArrowRightCircleFill size={22} color="white" />
    </Link>

  );
};

export default Card;

