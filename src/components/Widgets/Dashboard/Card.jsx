import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ heading }) => {
  return (
    <Link
      to="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <p className="text-sm md:text-base font-semibold mb-2">{heading}</p>
    </Link>
  );
};

export default Card;

