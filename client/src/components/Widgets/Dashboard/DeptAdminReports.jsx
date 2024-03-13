import React from "react";
import Card from "./Card";

const DeptAdminReports = () => {
  const cardsData1 = [
    { heading: "Flagship Schemes 0", index: 1 },
    { heading: "Over 5 Cr. Schemes 0 ", index: 2 },
    { heading: "50 Oldest Pending Schemes 0", index: 3 },
    { heading: "All Other Schemes 0", index: 4 },
  ];

  const cardsData2 = [
    { heading: "Flagship Schemes 0", index: 1 },
    { heading: "Over 5 Cr. Schemes 0 ", index: 2 },
    { heading: "50 Oldest Pending Schemes 0", index: 3 },
    { heading: "All Other Schemes 0", index: 4 },
  ];

  return (
    <>
    <div className="underline">Number of Schemes submitted Last Month </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-6">
      {cardsData1.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
   
    <div className="pt-6 underline">Number of Schemes submitted Last Month</div> 
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-6">
      {cardsData1.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
   
  </>
  );
};

export default DeptAdminReports;
