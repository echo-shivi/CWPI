import React from 'react';
import Card from './Card'; 

const DeptAdminAgencyWork = () => {
  const cardsData = [
    { heading: 'Flagship Schemes', index: 1 },
    { heading: 'Over 5 Cr last 3 years', index: 2 },
    { heading: '50 pending schemens', index: 3 },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default DeptAdminAgencyWork;