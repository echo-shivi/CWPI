import React from 'react';
import Card from './Card'; 

const AgencyWork = () => {
  const cardsData = [
    { heading: 'Card 1', index: 1,link:'/scheme-report-details' },
    { heading: 'Card 2', index: 2,link:'/scheme-report-details' },
    { heading: 'Card 3', index: 3 ,link:'/scheme-report-details'},
    { heading: 'Card 4', index: 4,link:'/scheme-report-details' },
    { heading: 'Card 5', index: 5 ,link:'/scheme-report-details'},
    { heading: 'Card 6', index: 6,link:'/scheme-report-details' },
    { heading: 'Card 7', index: 7,link:'/scheme-report-details' },
    { heading: 'Card 8', index: 8,link:'/scheme-report-details' },
    { heading: 'Card 9', index: 9,link:'/scheme-report-details' },
    { heading: 'Card 10', index: 10,link:'/scheme-report-details' },
    { heading: 'Card 11', index: 11 ,link:'/scheme-report-details'},
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cardsData.map((card, index) => (
     
        <Card key={index} {...card}  />

      ))}
    </div>
  );
};

export default AgencyWork;