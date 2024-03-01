import React from 'react';
import Card from './Card'; 

const AgencyWork = () => {
  const cardsData = [
    { heading: 'Minor WAter Resource Department(MWRD)', index: 1 },
    { heading: 'Bihar Police Building Construction Corporation(BPBCC)', index: 2 },
    { heading: 'Infrastructure Development Corporation(BSTDC)', index: 3 },
    { heading: 'Bihar State Tourism Development Corportaion(BSTDC)', index: 4 },
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
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default AgencyWork;