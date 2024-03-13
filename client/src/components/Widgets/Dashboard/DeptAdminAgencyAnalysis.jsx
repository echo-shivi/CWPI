import React from 'react';
import Card from './Card'; 

const AgencyWork = () => {
  const cardsData = [
    { heading: 'P 1', index: 1 },
    { heading: 'P 2', index: 2 },
    { heading: 'P 3', index: 3 },
    { heading: 'P 4', index: 4 },
    { heading: 'P 5', index: 5 },
    { heading: 'P 6', index: 6 },
    { heading: 'P 7', index: 7 },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default AgencyWork;