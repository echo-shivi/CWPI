import React from 'react';
import { Link } from 'react-router-dom';

const AgencyWork = () => {
  const cardsData = [
    { heading: 'Minor WAter Resource Department(MWRD)', index: 1, project: 5 },
    { heading: 'Bihar Police Building Construction Corporation(BPBCC)', index: 2, project: 6 },
    { heading: 'Infrastructure Development Corporation(BSTDC)', project: 7 },
    { heading: 'Bihar State Tourism Development Corportaion(BSTDC)', index: 4, project: 5 },
    { heading: 'Card 5', index: 5 },
    { heading: 'Card 6', index: 6 },
    { heading: 'Card 7', index: 7 },
    { heading: 'Card 8', index: 8 },
    { heading: 'Card 9', index: 9 },
    { heading: 'Card 10', index: 10 },
    { heading: 'Card 11', index: 11 },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cardsData.map((card, index) => (
        <Link
          to="#"
          key={index}
          className="block max-w-sm p-6 bg-blue-300 text-black border border-gray-200 rounded-lg shadow hover:bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p className="text-sm md:text-base font-medium mb-2">{card.heading}</p>
          {card.project ? (
            <p className='font-normal text-base'>{card.project}</p>
          ) : (
            <p className='font-normal text-base'>0</p>
          )}

        </Link>
      ))}
    </div>
  );
};

export default AgencyWork;
